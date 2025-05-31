const { Conta, Transacao } = require('../models');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async criarTransacao(req, res) {
        try {
            const { contaId, tipo, valor } = req.body;

            if (!contaId || !tipo || !valor) {
                return res.status(400).json({ erro: 'Dados incompletos' });
            }

            const conta = await Conta.findByPk(contaId);
            if (!conta) {
                return res.status(404).json({ erro: 'Conta não encontrada' });
            }

            if (tipo === 'saque' && conta.saldo < valor) {
                return res.status(400).json({ erro: 'Saldo insuficiente' });
            }

            // Atualizar saldo
            const novoSaldo = tipo === 'deposito' ? conta.saldo + valor : conta.saldo - valor;
            await conta.update({ saldo: novoSaldo });

            // Criar transação
            const novaTransacao = await Transacao.create({
                id: uuidv4(),
                contaId,
                tipo,
                valor
            });

            return res.status(201).json({ mensagem: 'Transação realizada com sucesso', novaTransacao });
        } catch (error) {
            return res.status(500).json({ erro: 'Erro na transação', detalhe: error.message });
        }
    },
    async listarTransacoesPorConta(req, res) {
        try {
            const { contaId } = req.params;

            const conta = await Conta.findByPk(contaId);
            if (!conta) {
                return res.status(404).json({ erro: 'Conta não encontrada' });
            }

            const transacoes = await Transacao.findAll({
                where: { contaId },
                order: [['createdAt', 'DESC']]
            });

            return res.status(200).json({
                saldoAtual: conta.saldo,
                transacoes
            });
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao listar extrato', detalhe: error.message });
        }
    }


};
