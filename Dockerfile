FROM node:alpine

#  Colocar um mkdir

WORKDIR /app

# COPY ./ /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "run"]

CMD ["dev"]