'use strict'

const searchBar = document.getElementById('input')

const select = document.getElementById('filter-options')
let filterOption = 'ds1'

let project = [
    
    {  
        student: 'Ana Luiza A. Morais',
        class: 'ds1ait-b',
        project_name: 'Minion Translate',
        project_image: 'https://user-images.githubusercontent.com/123708215/276296128-8e91e9e8-5997-430a-94a0-f6518ad68a9d.png',
        figma: 'https://www.figma.com/file/Tj4GQCKUyr2B88UHl8SeTP/Untitled?type=design&node-id=0-1&mode=design&t=Yiy3r4D8MdBrlAwr-0',
        github: 'https://github.com/analu-a/Projeto-API',
        site: 'https://analu-a.github.io/Projeto-API/',
        concluido: true
    },
    {
        student: 'Bianca Maria Soares',
        class: 'ds1ait-a',
        project_name: 'Makeup world',
        project_image: undefined,
        figma: 'https://www.figma.com/file/4mSaMvDeGHFJJlm6ZpMQyO/makeup-world?type=design&node-id=5-23&mode=design&t=AlInItsPvCBUBZEb-0',
        github: 'https://github.com/biancaasoares/makeupWorld',
        site: '#',
        concluido: false
    },
    {
        student: 'Carolina Neponucena',
        class: 'ds1ait-a',
        project_name: 'FruitVyce',
        project_image: 'https://www.fruityvice.com/images/cherry.png',
        figma: 'https://www.figma.com/file/3RPQ0bHxMxqDoxOvMgAym1/Untitled?type=design&node-id=0-1&mode=design&t=lqjFBlBb0kaaiHFU-0',
        github: 'https://github.com/carolneponucenaa/fruityVice2',
        site: 'https://carolneponucenaa.github.io/fruityVice2/',
        concluido: false
    },
    {
        student: 'Cauã da Silva',
        class: 'ds1bit-b',
        project_name: 'Pokédex?',
        project_image: 'https://github.com/Caua90210/Site-API/blob/main/desktop.jpg?raw=true',
        figma: 'https://www.figma.com/file/2oAqBQyAEs54pCM9uPizXG/Untitled?type=design&node-id=0-1&mode=design&t=NevGhgaF0X3blOCI-0',
        github: 'https://github.com/Caua90210/Site-API',
        site: 'https://caua90210.github.io/Site-API/index.html',
        concluido: false
    },
    {
        student: 'Eduardo Gonçalves de Oliveira',
        class: 'ds1ait-b',
        project_name: 'Gaana: MusicalSearcher',
        project_image: 'https://github.com/EduardoGoncalvesdeOliveira/AtividadeConsumoDeAPI_GAANAMusic/blob/main/img/Logo%20Gaana.PNG?raw=true',
        figma: 'https://www.figma.com/file/LUYkhQgktrykJtb8fB1TKd/GaanaAPI?type=design&node-id=3%3A4&mode=design&t=MdRwKVRMlj2a7vle-1',
        github: 'https://github.com/EduardoGoncalvesdeOliveira/AtividadeConsumoDeAPI_GAANAMusic',
        site: 'https://eduardogoncalvesdeoliveira.github.io/AtividadeConsumoDeAPI_GAANAMusic/',
        concluido: false
    },
    {
        student: 'Emily Crepaldi',
        class: 'ds1ait-a',
        project_name: 'Tumblr-Cat',
        project_image: 'https://github.com/h4nniton/tumblr-api/blob/main/IMG/capa.png?raw=true',
        figma: 'https://www.figma.com/file/LvEfYBd4aOrbtUJRlaQvdZ/Tumblr-Cat?type=design&mode=design&t=kL7x9zOmAZ9mQaDy-0',
        github: 'https://github.com/h4nniton/tumblr-api',
        site: 'https://h4nniton.github.io/tumblr-api/',
        concluido: false
    },
    {
        student: 'Gabriela Fernandes',
        class: 'ds1ait-b',
        project_name: 'Marvel Characters & Comics',
        project_image: 'https://user-images.githubusercontent.com/124157058/276347589-37651b7d-ca56-4ea6-8112-dc285e6e66dd.png',
        figma: 'https://www.figma.com/file/rygsayOYqoFatqlNt2rqYP/marvel-api?type=design&node-id=0%3A1&mode=design&t=XgP7q3AcKphImgHH-1',
        github: 'https://github.com/gabfernandes8/marvel_api',
        site: 'https://gabfernandes8.github.io/marvel_api/',
        concluido: true
    },
    {
        student: 'Giovana Vieira',
        class: 'ds1ait-b',
        project_name: 'FATOS ',
        project_image: undefined,
        figma: 'https://www.figma.com/file/dAJaEiMC3bFRIe7zhJGbXw/Untitled?type=design&node-id=0-1&mode=design&t=qHGH60ASTfdqONLD-0',
        github: '#',
        site: '#',
        concluido: false
    },
    {
        student: 'Guilherme Abel',
        class: 'ds1ait-a',
        project_name: 'Riot Games API',
        project_image: undefined,
        figma: 'https://www.figma.com/file/EKdJX0sIPh8ihCvPOafPC5/Riot-Games?type=design&node-id=0-1&mode=design&t=snBRnazV3esO5jDp-0',
        github: 'https://github.com/GuiguiEM/API-Riot',
        site: 'https://guiguiem.github.io/API-Riot/',
        concluido: false
    },
    {
        student: 'Gustavo Campos',
        class: 'ds1bit-b',
        project_name: 'Quem disse essa frase?',
        project_image: 'https://github.com/caaaampos444/projeto_api/blob/main/desktop.PNG?raw=true',
        figma: 'https://www.figma.com/file/T1CkRhVrCWL8HA4SyCmC2e/Site-Quiz?type=design&node-id=0-1&mode=design&t=h4QcF34LROadNqhl-0',
        github: 'https://github.com/caaaampos444/projeto_api',
        site: 'https://caaaampos444.github.io/projeto_api/',
        concluido: true
    },
    {
        student: 'Gustavo Henrique',
        class: 'ds1ait-a',
        project_name: 'Star Wars API',
        project_image: 'https://user-images.githubusercontent.com/123705623/275350875-e8115e0e-78b5-43c9-af87-a8e547a3bb1d.png',
        figma: 'https://www.figma.com/file/iMfogPphHXsiBqOsrA2vvT/star-wars?type=design&node-id=0-1&mode=design&t=61HgDfC671eoTIYi-0',
        github: 'https://github.com/oghenrique/star-wars-API',
        site: 'https://oghenrique.github.io/star-wars-API/',
        concluido: true
    },
    {
        student: 'Igor Araujo',
        class: 'ds1ait-b',
        project_name: 'Rick and Morty Personagens',
        project_image: 'https://user-images.githubusercontent.com/123735950/274325429-fee5977a-43d4-4c18-bcac-460ce31fa7e9.PNG',
        figma: 'https://www.figma.com/file/PZ0m1tMn4G0LedMZWI9Kxa/RickAndMortyAPI?type=design&node-id=0-1&mode=design&t=XVaMnj3UpjMVMovd-0',
        github: 'https://github.com/IgorAraujooo/RickAndMorty-API',
        site: 'https://igoraraujooo.github.io/RickAndMorty-API/',
        concluido: true
    },
    {
        student: 'Jessica Pereira dos Santos',
        class: 'ds1ait-b',
        project_name: 'Listar-Pokémon',
        project_image: 'https://user-images.githubusercontent.com/124156735/276305025-45f0af28-0ffd-4e79-a019-7f8d7bc1c161.png',
        figma: 'https://www.figma.com/file/gNbPtN3rAdYEx9ktNPv6QQ/Untitled?type=design&node-id=0-1&mode=design&t=VRXP3vCKGoWSCO06-0',
        github: 'https://github.com/jeca16/projetoAPI-listarPokemon',
        site: 'https://jeca16.github.io/projetoAPI-listarPokemon/',
        concluido: false
    },
    {
        student: 'Julia Fonseca',
        class: 'ds1ait-a',
        project_name: 'Site de bebidas',
        project_image: undefined,
        figma: 'https://www.figma.com/file/rY7RQtDz4qQNoHvaHN1bsw/Untitled?type=design&node-id=0-1&mode=design&t=BixZIL5XhrRFKN17-0',
        github: 'https://github.com/Fjuliaaz/API',
        site: '#',
        concluido: false
    },
    {
        student: 'Julia Paiva',
        class: 'ds1ait-b',
        project_name: 'Studio Ghibli Movie',
        project_image: 'https://github.com/Paivaas/StudioGhibli/blob/main/movie/img/Studio%20Ghibli%20Movie.png?raw=true',
        figma: 'https://www.figma.com/file/Wit1TMZuRWQVbYGNrZJ4tp/Page-Studio-Ghibli?type=design&node-id=0-1&mode=design&t=3qoi5ejtA5rbcgYF-0',
        github: 'https://github.com/Paivaas/StudioGhibli',
        site: 'https://paivaas.github.io/StudioGhibli/',
        concluido: true
    },
    {
        student: 'Kainan Braga',
        class: 'ds1ait-a',
        project_name: '4Seasons',
        project_image: undefined,
        figma: 'https://www.figma.com/file/RksUQmefCFAB8rh6QyQVeo/Untitled?type=design&node-id=19-18&mode=design&t=W7pX08phZZjOevRr-0',
        github: 'https://github.com/lucikaii/4seasons',
        site: 'https://lucikaii.github.io/4seasons/',
        concluido: false
    },
    {
        student: 'Luan Oliveira',
        class: 'ds1ait-a',
        project_name: 'Azure.FM',
        project_image: undefined,
        figma: 'https://www.figma.com/file/K7MKFkRMoGd6I84bSlWryw/Untitled?type=design&node-id=0-1&mode=design&t=dqhrfMiSpYjwfl5w-0',
        github: 'https://github.com/luandso/Azure.FM',
        site: 'https://luandso.github.io/Azure.FM/',
        concluido: false
    },
    {
	    student: 'Luana Magalhães',
        class: 'ds1ait-a',
        project_name: 'InstaMeow',
        project_image: undefined,
        figma: 'https://www.figma.com/file/mD8AyI9yMB4NmhlpSnIxmD/InstaMeow?type=design&node-id=0%3A1&mode=dev',
        github: 'https://github.com/lU4N4ht/InstaMeow_ConsumoDeAPI',
        site: 'https://lu4n4ht.github.io/InstaMeow_ConsumoDeAPI/',
        concluido: false
    },
    {
        student: 'Luiz Henrique Vidal Araujo',
        class: 'ds1ait-a',
        project_name: 'ArtIC Searcher',
        project_image: undefined,
        figma: 'https://www.figma.com/file/DSbuyOpSMHqNwotcBbP1H1/Art-Institute-of-Chicago?type=design&node-id=0-1&mode=design&t=ClaHh1nWb11M1OEY-0',
        github: 'https://github.com/LUIZHVA02/P-W-F-E/tree/main/projetos-Front-End/atividade-SAS',
        site: 'https://luizhva02.github.io/P-W-F-E/projetos-Front-End/atividade-SAS/index.html',
        concluido: false
    },
    {
        student: 'Maria Luiza Costa Balieiro',
        class: 'ds1ait-a',
        project_name: 'taylorsfy',
        project_image: undefined,
        figma: 'https://www.figma.com/file/xo1R0xtQesApLLRqkqVYhd/Untitled?type=design&node-id=0-1&mode=design&t=PINuvpWMAfnLmkIC-0',
        github: 'https://github.com/MariaLuizaBalieiro/taylorsfy',
        site: 'https://marialuizabalieiro.github.io/taylorsfy/',
        concluido: false
    },
    {
        student: 'Mariana Alves',
        class: 'ds1ait-b',
        project_name: 'Movies Archive',
        project_image: 'https://http2.mlstatic.com/D_NQ_NP_755111-MLB54756518115_032023-O.webp',
        figma: 'https://www.figma.com/file/VYKrNNRiPxCtxYozamTQNB/Filmes?type=design&node-id=0-1&mode=design&t=bAN1H7MZDMPJ0Mv2-0',
        github: 'https://github.com/xoxomyj/frontend-api.git',
        site: 'https://xoxomyj.github.io/frontend-api/',
        concluido: false
    },
    {
        student: 'Matheus Zanoni',
        class: 'ds1ait-b',
        project_name: 'Anime Database',
        project_image: 'https://user-images.githubusercontent.com/123570240/274327290-23581b49-77be-41ea-8d7a-bf88d205771d.png',
        figma: 'https://www.figma.com/file/GELQawofprZQKRoqP0mNk1/Untitled?type=design&node-id=0-1&mode=design&t=My2yXQzUf2qdip8b-0',
        github: 'https://github.com/Mat3uss/api-anime',
        site: 'https://mat3uss.github.io/api-anime/',
        concluido: false
    },
    {
        student: 'Natália Bastazini',
        class: 'ds1ait-b',
        project_name: 'Bastazini Music',
        project_image: 'https://github.com/natybastazini/bastaziniMusic/assets/123602413/65cc7d10-26bf-47f5-9a09-a17678753fb0',
        figma: 'https://www.figma.com/file/zibI4zwJXIwmcUQBvBBiuJ/Untitled?type=design&node-id=0-1&mode=design&t=TUvBp8Z69lLakGFK-0',
        github: 'https://github.com/natybastazini/bastaziniMusic',
        site: 'https://natybastazini.github.io/bastaziniMusic/',
        concluido: false
    },
    {
        student: 'Nathalia Ventura',
        class: 'ds1bit-b',
        project_name: 'Harry Potter Infos',
        project_image: undefined,
        figma: 'https://www.figma.com/file/mUQarZ5IISisJoEh3FPOvz/Harry-Potter-API?type=design&node-id=2-3&mode=design&t=WaEOiXmLf3HdxWo3-0',
        github: 'https://github.com/vkawaka/HarryPotter.git',
        site: 'https://vkawaka.github.io/HarryPotter/',
        concluido: false
    },
    {
        student: 'Nicolas Vasconcelos Petri',
        class: 'ds1ait-a',
        project_name: 'ViaMaps',
        project_image: undefined,
        figma: 'https://www.figma.com/file/rcjmGwdSWvJyaRbQ7U2svn/Untitled?type=design&node-id=0%3A1&mode=design&t=UhjkWGrcBJOHPiPS-1',
        github: 'https://github.com/nvpetri/ViaMaps',
        site: 'https://nvpetri.github.io/ViaMaps/',
        concluido: true
    },
    {
        student: 'Nycolle Lima',
        class: 'ds1ait-a',
        project_name: 'Zoo Park',
        project_image: 'https://github.com/NycolleL/zoo/blob/main/capa.png?raw=true',
        figma: 'https://www.figma.com/file/9sN4aeqzaky7WExHmp1tci/Zoo?type=design&node-id=0-1&mode=design&t=K9kfAMz0GzeT7JPt-0',
        github: 'https://github.com/NycolleL/zoo',
        site: 'https://nycollel.github.io/zoo/',
        concluido: false
    },
    {
	    student: 'Pedro Barbosa',
        class: 'ds1ait-b',
        project_name: 'Pokemon API',
        project_image: 'https://user-images.githubusercontent.com/113317866/274397982-7e68e507-f889-4947-ac13-c4cdab6feb43.png',
        figma: 'https://www.figma.com/file/NRkO0FfzRustL10HxvIav6/Untitled?type=design&node-id=0-1&mode=design&t=WHrHajXU2xMpdhBN-0',
        github: 'https://github.com/pedrohenrqe/Site-API',
        site: 'https://pedrohenrqe.github.io/Site-API/',
        concluido: false
    },  
    {
        student: 'Pedro Pedraga',
        class: 'ds1ait-b',
        project_name: 'Clash Royale APi',
        project_image: 'https://user-images.githubusercontent.com/124139371/274326490-6588b3ff-5f3c-4a32-823b-6025f42e2b5d.png',
        figma: 'https://www.figma.com/file/4jy6Z40MDonIr1xktudQM5/Untitled?type=design&node-id=1-3&mode=design&t=zNiInWfG6oija7c5-0',
        github: 'https://github.com/PedrooTz/ClashRoyaleAPI',
        site: 'https://pedrootz.github.io/ClashRoyaleAPI/',
        concluido: false
    },
    {
        student: 'Ricardo Borges do Amaral',
        class: 'ds1bit-b',
        project_name: 'VEIO PORQUE QUIZ',
        project_image: 'https://github.com/Ricardo-borges1/quiz-pwfe/blob/main/print-quizpwfe.PNG?raw=true',
        figma: 'https://www.figma.com/file/W7dA3TaqprPYpuWznrtF5B/Untitled?type=design&node-id=28-2&mode=design&t=H3STlfF2ORcY1waC-0',
        github: 'https://github.com/Ricardo-borges1/quiz-pwfe',
        site: 'https://ricardo-borges1.github.io/quiz-pwfe/',
        concluido: false
    },
    {
        student: 'Ruan Calsolari',
        class: 'ds1ait-b',
        project_name: 'Marvel Characters & Comics',
        project_image: undefined,
        figma: 'https://www.figma.com/file/Q7HbWJzMutgnJngWPy6Ud6/Untitled?type=design&node-id=0%3A1&mode=design&t=6vSrZrr3BlRCHqh8-1',
        github: 'https://github.com/Calsolari/Marvel-API',
        site: 'https://calsolari.github.io/Marvel-API/',
        concluido: false
    },
    {
        student: 'Ryan Alves',
        class: 'ds1ait-b',
        project_name: 'Harry Potter Wiki',
        project_image: 'https://github.com/RyanAlvesz/harry_potter/raw/main/img/hp_wiki.png',
        figma: 'https://www.figma.com/file/lfhuuXMmv9WVn4yyYs4Uor/Harry-Potter?type=design&node-id=0%3A1&mode=design&t=nPPzwnHYPWPXps39-1',
        github: 'https://github.com/RyanAlvesz/harry_potter',
        site: 'https://ryanalvesz.github.io/harry_potter/',
        concluido: true
    },
    {
        student: 'Suzane Arcanjo',
        class: 'ds1bit-b',
        project_name: 'Suas receitas.',
        project_image: undefined,
        figma: 'https://www.figma.com/file/FFx6S23mxZOYtmBr3npkSs/Untitled?type=design&node-id=0-1&mode=design&t=skXPgE2bdpfyaNgm-0',
        github: 'https://github.com/ssuzane/API_receitas',
        site: 'https://ssuzane.github.io/API_receitas/',
        concluido: false
    },
    {
        student: 'Tamires Fernandes',
        class: 'ds1ait-a',
        project_name: "Ghibli's Gallery",
        project_image: undefined,
        figma: 'https://www.figma.com/file/qUInLCadFqj58v4oKwKKtx/Untitled?type=design&node-id=0%3A1&mode=design&t=GiBlRSXGCUVtxebE-1',
        github: 'https://github.com/oRdv/api-studioGhibli.git',
        site: 'https://ordv.github.io/api-studioGhibli/',
        concluido: false
    },
    {
        student: 'Vitor Kolle',
        class: 'ds1bit-b',
        project_name: 'AstroBrasil',
        project_image: 'https://github.com/vitorkolle/api-nasa/assets/123905283/eadf68be-22cf-4fd5-8c7f-a49ffd7b9be9',
        figma: 'https://www.figma.com/file/KmXpyPRHSKOKjXes9msMYK/tela-api?type=design&node-id=0-1&mode=design&t=1kiHiK4g9wJWINlm-0',
        github: 'https://github.com/vitorkolle/api-nasa',
        site: 'https://vitorkolle.github.io/api-nasa/',
        concluido: false
    },
    {
        student: 'Vitoria Azevedo',
        class: 'ds1ait-b',
        project_name: 'Bíblia Sagrada',
        project_image: 'https://github-production-user-asset-6210df.s3.amazonaws.com/124360742/276304210-66204685-42b1-4f8e-bdc8-308c157eb72a.png',
        figma: 'https://www.figma.com/file/kIHJAotyykfIgrDhtoFEqs/B%C3%ADblia_Sagrada?type=design&node-id=0-1&mode=design&t=g03sHh4kMQyPsQQ2-0',
        github: 'https://github.com/hanabin28/Biblia_Sagrada',
        site: '#',
        concluido: false
    },
    {
        student: 'Yasmin Targino',
        class: 'ds1ait-b',
        project_name: 'Fatos sobre cachorros',
        project_image: 'https://blog.polipet.com.br/wp-content/uploads/2022/08/AdobeStock_100800827-scaled.jpeg',
        figma: 'https://www.figma.com/file/prxfLRiiOfoNT6oWWYm7nt/Projeto-fatos-sobre-c%C3%A3es?type=design&node-id=0%3A1&mode=design&t=rkKt5XSbwV2U9Kgc-1',
        github: 'https://github.com/Emy0622/atividade_site',
        site: 'https://emy0622.github.io/atividade_site/',
        concluido: false
    }
    
    
]

const createProjectCard = (project) => {
    
    const projectsSection = document.getElementById('projects-section')
    projectsSection.replaceChildren('')
    
    project.map((project) => {

        let projectContainer

        if(project.project_image != undefined){
            
            projectContainer = document.createElement('button')
            
            projectContainer.addEventListener('click', (e) =>{

                if(e.target.tagName != 'A'){

                
                    let projects = document.getElementsByClassName('project-container')

                    for (let project of projects){
                        project.classList.add('point-event')
                    }
                    
                    const moreInfo = document.createElement('div')
                    moreInfo.classList.add('more-info')

                    const closeButton = document.createElement('button')
                    closeButton.classList.add('close-button')
                    
                    const closeButtonImg = document.createElement('img')
                    closeButtonImg.src = './assets/img/close-icon.svg'

                    closeButton.addEventListener('click', () => {

                        moreInfo.parentNode.removeChild(moreInfo)
                        for (let project of projects){
                            project.classList.remove('point-event')
                        }

                    })
                    
                    const projectImage = document.createElement('a')
                    projectImage.classList.add('project-img')
                    projectImage.href = project.site
                    projectImage.target = '_blank'
                    projectImage.style.backgroundImage = `url(${project.project_image})`

                    const info = document.createElement('div')
                    info.classList.add('student-info')

                    const name = document.createElement('span')
                    name.textContent = project.student

                    const studentClass = document.createElement('span')
                    studentClass.textContent = project.class

                    moreInfo.replaceChildren(closeButton, projectImage, info)
                    closeButton.appendChild(closeButtonImg)
                    info.replaceChildren(name, studentClass)
                    projectsSection.appendChild(moreInfo)
                    
                }

            })
            
        }else if (project.project_image == undefined){

            projectContainer = document.createElement('div')

        }

        projectContainer.classList.add('project-container')
        
        const projectInfo = document.createElement('div')
        projectInfo.classList.add('info')

        if(project.concluido == false)
        projectInfo.style.color = 'var(--light-gray)'
        
        const projectTitle = document.createElement('h2')
        projectTitle.classList.add('project-title')
        projectTitle.textContent = project.project_name

        const studentInfo = document.createElement('div')
        studentInfo.classList.add('student-info')
        
        const studentName = document.createElement('span')
        studentName.classList.add('name')
        studentName.textContent = project.student

        const studentClass = document.createElement('span')
        studentClass.classList.add('class')
        studentClass.textContent = project.class
        
        const buttons = document.createElement('div')
        buttons.classList.add('buttons')
        
        const figmaButton = document.createElement('button')
        const figmaLink = document.createElement('a')
        figmaLink.href = project.figma
        figmaLink.target = '_blank'
        const figmaImage = document.createElement('img')
        figmaImage.src = './assets/img/figma.svg'
        figmaImage.alt = 'Logo Figma'
        
        const gitButton = document.createElement('button')
        const gitLink = document.createElement('a')
        gitLink.href = project.github
        gitLink.target = '_blank'
        const gitHubImage = document.createElement('img')
        gitHubImage.src = './assets/img/github.svg'
        gitHubImage.alt = 'Logo GitHub'
        
        const siteButton = document.createElement('button')
        const siteLink = document.createElement('a')
        siteLink.href = project.site
        siteLink.target = '_blank'
        const siteImage = document.createElement('img')
        siteImage.src = './assets/img/web.svg'
        siteImage.alt = 'Desenho do planeta terra composto de linhas laranjas'

        projectContainer.replaceChildren(projectInfo, buttons)
        projectInfo.replaceChildren(projectTitle, studentInfo)
        studentInfo.replaceChildren(studentName, studentClass)
        buttons.replaceChildren(figmaButton, gitButton, siteButton)
        figmaButton.appendChild(figmaLink)
        figmaLink.appendChild(figmaImage)
        gitButton.appendChild(gitLink)
        gitLink.appendChild(gitHubImage)
        siteButton.appendChild(siteLink)
        siteLink.appendChild(siteImage)

        projectsSection.appendChild(projectContainer)

    })
        
}

searchBar.addEventListener('keyup', (e) => {

    const search = e.target.value.toLowerCase()
    
    const filteredProject = project.filter((project) => {
        return (
            project.student.toLowerCase().includes(search) &&
            project.class.toLocaleLowerCase().includes(filterOption) ||
            project.project_name.toLowerCase().includes(search) &&
            project.class.toLocaleLowerCase().includes(filterOption)
            );
        });

    createProjectCard(filteredProject)   

})

select.addEventListener('change', () => {

    filterOption = select.value

    if(filterOption == 'true'){

        const filteredProject = project.filter((project) => {
            return (
                project.concluido == Boolean(filterOption) 
                )
            })

            createProjectCard(filteredProject)   

    } else {

        const filteredProject = project.filter((project) => {
            return (
                project.class.toLocaleLowerCase().includes(filterOption)
                )
            })
    
        createProjectCard(filteredProject)   

    }

})

createProjectCard(project)