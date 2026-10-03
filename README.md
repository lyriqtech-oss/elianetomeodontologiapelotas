# Eliane Tomé — Odontologia Especializada e Harmonização Facial

Site estático em português da clínica Eliane Tomé, em Pelotas/RS. Inclui o layout responsivo, logotipo, retrato otimizado, tratamentos, avaliações, FAQ e contato pelo WhatsApp.

## Executar localmente

```sh
python3 -m http.server 8080 --directory dist
```

Abra http://localhost:8080. Não há dependências nem etapa de build. Publique a pasta `dist` em um serviço de hospedagem estática. O arquivo `vercel.json` configura essa pasta na Vercel.

## SEO

Título e descrição locais, URL canônica, Open Graph, Twitter Cards, JSON-LD com Dentist/WebSite/WebPage/FAQPage, sitemap.xml, robots.txt e llms.txt. As imagens usadas no site estão em WebP. Conteúdo e links de contato funcionam sem JavaScript.

A URL canônica atual é https://eliane-tome-pelotas.rogerioweymar.chatgpt.site/. Se mudar o domínio, atualize a URL em `dist/index.html`, `dist/privacidade.html`, `dist/sitemap.xml` e `dist/robots.txt`, além de `dist/llms.txt`. O acesso público à hospedagem é necessário para indexação.

As respostas do FAQ reproduzem o conteúdo visível; a marcação não garante resultados enriquecidos. Não há marcação de estrelas de avaliações próprias.
