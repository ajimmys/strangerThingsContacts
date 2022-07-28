FROM maven:3.8.6
WORKDIR /crudweb
COPY . .
RUN mvn clean install
CMD mvn spring-boot:run