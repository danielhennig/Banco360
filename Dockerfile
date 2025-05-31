# Dockerfile
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copia arquivos
COPY package*.json ./
RUN npm install

COPY . .

# Expõe porta
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "run", "dev"]
