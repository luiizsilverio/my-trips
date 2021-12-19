<table>
  <tr>
    <td>
      <img src="https://github.com/luiizsilverio/my-trips/blob/main/public/img/map-icon.png" />
    </td>
    <td><h1>My-Trips</h1></td>
  </tr>
</table>

## Conteúdo
* [Sobre o Projeto](#sobre-o-projeto)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Screenshots](#camera_flash-screenshots)
* [Iniciando o Projeto](#car-Iniciando-o-projeto)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre o projeto
Aplicativo desenvolvido em React/Next com Typescript que mostra o mapa-mundi com marcadores indicando todos os lugares que eu visitei (marcador vermelho) ou desejo conhecer (marcador verde).<br/>
Ao clicar nos marcadores, abre uma tela com informações sobre o lugar, com texto e fotos.<br/>
Os dados estão armazenados no GraphCMS e são acessados por meio de uma API GraphQL.<br/>
Utiliza recursos de páginas dinâmicas e páginas estáticas.<br/>
A aplicação pode ser acessada [aqui](https://my-trips-seven-wine.vercel.app).<br/>

## :hammer_and_wrench: Tecnologias
* <ins>React</ins>
* <ins>NextJs</ins>
* <ins>Typescript</ins>
* Mapa <ins>Leaflet / MapBox</ins>
* Estilização com <ins>Styled-Components</ins>
* Banco de dados armazenado no CMS <ins>GraphCMS</ins>
* Acesso a API GraphQL

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/my-trips/blob/main/public/img/cover.png)

## :car: Iniciando o projeto
```bash
# Baixe o repositório com git clone e entre na pasta do projeto.
$ git clone https://github.com/luiizsilverio/my-trips.git

# Execute yarn para instalar as dependências (ou npm install)
$ yarn

# O intervalo de tempo padrão é 25 minutos. Para diminuir o tempo,
# Altere a variável global NEXT_PUBLIC_INTERVALO_TEMPO no arquivo .env.

# Para iniciar a aplicação
$ yarn dev

# Abra http://localhost:3000 no navegador
```

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
