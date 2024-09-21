import PlayQuiz from './src/assets/img/Playquiz.png'
import Relogio from './src/assets/img/Relogio.png'
import ToDoList from './src/assets/img/Todolist.png'
import InovaIf from './src/assets/img/Inovaif.png'
import Breve from './src/assets/img/Breve.png'
import AdviNumero from './src/assets/img/Adivinhenumero.png'
import Instituto from './src/assets/img/Instituto.png'
import Portifolio3 from './src/assets/img/Portifolio3.png'
const projetos = [
    {
        "id": 1,
        "titulo": "Jogo: Play Quiz",
        "tecnologias":"HTML, CSS3, JAVASRIPT, JQUERY E API",
        "img": `${PlayQuiz}`,
        "descricao": "Play Quiz desenvolvido com HTML5, CSS3 e JavaScript com framework JQuery.O jogo tem usabilidade simples. O usuário inicia o jogo, lê a pergunta e escolha uma das alternativas disponivel. A cada alternativa certa o jogador acumala 250 pontos a sua pontuação e 0 (zero) a cada alternativa escolhida errada. No back-end é utilizado JavaScript que utiliza o metodo GET para fazer requesição ao um API de perguntas e respotas que devolve objetos JSON e é tratado de maneira especifica. Cada vez que o usuário reinicia, ganha ou perde, o jogo traz novas perguntas o tornando-o ainda mais desafiador. OBS: O jogo está em inglês por não se ter encotrado uma API adequando de perguntas e resposta.",
        "botoes":{
            "botao1": { label: "Código",
                        link:"https://github.com/fernanda-borg3s/play-quiz-game"
             },
            "botao2": { label: "Jogar",
                        link:"https://play-quiz-fbb.netlify.app/"
             }
        }

        
    },
    {
        "id": 2,
        "titulo": "Relógio Digital",
        "tecnologias":"HTML, CSS3 E JAVASRIPT",
        "img": `${Relogio}`,
        "descricao": "Relógio Digital para testar funções da classe Date do JavaScript. Foi utilizado o metódo getHours, getMinutes, getSeconds no qual com os valores retornados foi possível formatar em HH:MM:SS, além de, utilizando elementos DOM foi possível alterar a imagem de acordo com a hora.",
        "botoes":{
            "botao1": { label: "Código",
                        link:"https://github.com/fernanda-borg3s/relogio-digital"
             },
            
        }
        
    },
    {
        "id": 3,
        "titulo": "Página Institucional",
        "tecnologias":"HTML, CSS3 E JAVASRIPT",
        "img": `${Instituto}`,
        "descricao": "Página Institucional completa desenvolvida para praticar HTML5, CSS3 e algumas funções básicas de JavaScript puro.",
        "botoes":{
            "botao1": { label: "Código",
                        link:"https://github.com/fernanda-borg3s/web-page"
             },
        }
        
    },
    {
        "id": 4,
        "titulo": "Lista de Tarefas",
        "tecnologias":"HTML, CSS3 E JAVASRIPT",
        "img": `${ToDoList}`,
        "descricao": "Lista de tarefas (To do List) desenvolvido com HTML5, CSS3 e JavaScript puro. Esse site permite colocar atividades que o usuário planeja fazer no dia a dia, marcar como concluída e depois excluir todos os itens da lista que foram adicionados. Na principal função do site, que é o armazenamento de dados (atividades digitadas pelo o usuário), foi utilizado, para praticar, a funcionalidade localStorage que permite adicionar, armazenar e excluir dados localmente em um navegador web.",
        "botoes":{
            "botao1": { label: "Código",
                        link:"https://github.com/fernanda-borg3s/to-do-list"
             },
            "botao2": { label: "Site",
                        link:"https://to-list-tarefas.netlify.app/"
             }
        }
        
    },
    {
        "id": 5,
        "titulo": "Jogo: Adivinhe o Número",
        "tecnologias":"HTML, CSS3 E JAVASRIPT",
        "img": `${AdviNumero}`,
        "descricao": "Jogo desenvolvido com HTML5, CSS3 e JavaScript puro.Esse jogo conta com cinco fases distintas, cada qual, com comandos e regras específicas. O jogador passa para a próxima fase, com uma dificuldade maior, quando este acerta o número sorteado. Vence o jogo acertando todos os números sorteados da cincos fases, mas volta para o início quando se excede o número de tentativas disponíveis ou quando o tempo acaba.",
        "botoes":{
            "botao1": { label: "Código",
                        link:"https://github.com/fernanda-borg3s/Qual-numero-game"
             },
            "botao2": { label: "Jogar",
                        link:"https://adivinhe-o-numero-game.netlify.app/"
             }
        }
        
    },
    {
        "id": 6,
        "titulo": "Inova IF",
        "tecnologias":"HTML, CSS3, JAVASRIPT, VITE, REACT, BOOSTRAP, EXPRESS, AXIOS, FULLCALENDAR",
        "img": `${InovaIf}`,
        "descricao": "Trabalho de conclusão de curso apresentado à banca de qualificação do Curso Superior de Tecnologia em Sistemas para Internet do Instituto Federal de Brasília – Campus Brasília. O Curso Técnico em Eventos Integrado ao Ensino Médio do IFB, campus Brasília, apresenta um plano pedagógico inovador que permite que alunas, com auxílio das professoras, definam prioridades e roteiros individuais de estudo, que podem ser cumpridos através de estudos autônomos, em grupo, participação em oficinas ou projetos. Devido ao modelo diferenciado, foi identificada a necessidade de desenvolvimento de um sistema que tornasse possível melhorar o processo de cadastro de aulas e oficinas pelas professoras e a inscrição das alunas de todas as séries, facilitando seu acompanhamento. Dessa forma, foi desenvolvida essa aplicação em arquitetura web em camadas a partir da aplicação de metodologias de desenvolvimento de software e utilizando tecnologias como JavaScript, React, PostgreSQL, Express, Axios e entre outros, visando atender às demandas específicas do curso. A aplicação desenvolvida permitiu criar um site para que atrizes com papéis distintos (professora e aluna) e atuação de acordo (cadastro e inscrição) com regras de negócio definidas na análise de requisitos.",
        "botoes":{
            "botao1": { label: "Código",
                        link:"https://github.com/fernanda-borg3s/front-end_inova_IF"
             },
           "botao2": { label: "Site",
                        link:"https://inovaif-theta.vercel.app/"
            }
        }
        
    },
    {
        "id": 7,
        "titulo": "Portifólio 3.0",
        "tecnologias":"HTML, CSS3, JAVASRIPT, REACT, BOOSTRAP, VITE, PARTICLES.JS",
        "img": `${Portifolio3}`,
        "descricao": "Este portfólio foi criado utilizando HTML5, CSS3 e Bootstrap para design responsivo que garante a compatibilidade com diversos dispositivos. A interatividade foi implementada com JavaScript e React, oferecendo uma navegação dinâmica e eficiente. Para otimização de performance e gerenciamento de dependências, o projeto foi construído com Vite, resultando em carregamento rápido e uma experiência de usuário aprimorada.",
        "botoes":{
            "botao1": { label: "Código",
                         link:"https://github.com/fernanda-borg3s/portifolio"
             },
        }
        
    },
    {
        "id": 8,
        "titulo": "Em breve",
        "tecnologias":"Em breve mais um projeto aqui. Aguarde...",
        "img": `${Breve}`,
        "descricao": "Clicando no botão abaixo, você pode conferir outros projetos desenvolvido no GitHub.",
        "botoes":{
            "botao1": { label: "Outros projetos",
                        link:"https://github.com/fernanda-borg3s"
             },
        }
        
    },
   
    
]

export default projetos;
