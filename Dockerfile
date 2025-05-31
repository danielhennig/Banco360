# Use uma imagem oficial do Node.js (LTS) como base
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências (package.json e package-lock.json, se existir)
COPY package*.json ./

# Instala as dependências listadas em package.json dentro do container
RUN npm install

# Copia todo o código da aplicação para o diretório de trabalho
COPY . .

# Expõe a porta em que a aplicação irá rodar (ajuste se necessário)
EXPOSE 3000

# Comando para iniciar a aplicação em modo desenvolvimento (utilizando nodemon)
CMD ["npm", "run", "dev"]
