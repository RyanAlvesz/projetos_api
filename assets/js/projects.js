'use strict'

const searchBar = document.getElementById('input')

const select = document.getElementById('filter-options')
let filterOption = 'ds1'

let project = [
    
    {
        student: 'Ryan Alves',
        class: 'ds1ait-b',
        project_name: 'Harry Potter Wiki',
        figma: 'https://www.figma.com/file/lfhuuXMmv9WVn4yyYs4Uor/Harry-Potter?type=design&node-id=0%3A1&mode=design&t=nPPzwnHYPWPXps39-1',
        github: 'https://github.com/RyanAlvesz/harry_potter',
        site: 'https://ryanalvesz.github.io/harry_potter/'
    },
    {
        student: 'Bianca Maria Soares',
        class: 'ds1ait-a',
        project_name: 'Makeup world',
        figma: 'https://www.figma.com/file/4mSaMvDeGHFJJlm6ZpMQyO/makeup-world?type=design&node-id=5-23&mode=design&t=AlInItsPvCBUBZEb-0',
        github: 'https://github.com/biancaasoares/makeupWorld',
        site: '#',
    },
    {
        student: 'Eduardo Gonçalves de Oliveira',
        class: 'ds1ait-b',
        project_name: 'Gaana: MusicalSearcher',
        figma: 'https://www.figma.com/file/LUYkhQgktrykJtb8fB1TKd/GaanaAPI?type=design&node-id=3%3A4&mode=design&t=MdRwKVRMlj2a7vle-1',
        github: 'https://github.com/EduardoGoncalvesdeOliveira/AtividadeConsumoDeAPI_GAANAMusic',
        site: 'https://eduardogoncalvesdeoliveira.github.io/AtividadeConsumoDeAPI_GAANAMusic/'
    },
    {
        student: 'Emily Crepaldi',
        class: 'ds1ait-a',
        project_name: 'Tumblr-Cat',
        figma: 'https://www.figma.com/file/LvEfYBd4aOrbtUJRlaQvdZ/Tumblr-Cat?type=design&mode=design&t=kL7x9zOmAZ9mQaDy-0',
        github: 'https://github.com/h4nniton/tumblr-api',
        site: 'https://h4nniton.github.io/tumblr-api/'
    },
    {
        student: 'Gabriela Fernandes',
        class: 'ds1ait-b',
        project_name: 'Marvel Characters & Comics',
        figma: 'https://www.figma.com/file/rygsayOYqoFatqlNt2rqYP/marvel-api?type=design&node-id=0%3A1&mode=design&t=XgP7q3AcKphImgHH-1',
        github: 'https://github.com/gabfernandes8/marvel-pwfe-api',
        site: 'https://gabfernandes8.github.io/marvel_api/'
    },
    {
        student: 'Gustavo Henrique',
        class: 'ds1ait-a',
        project_name: 'Star Wars API',
        figma: 'https://www.figma.com/file/iMfogPphHXsiBqOsrA2vvT/star-wars?type=design&node-id=0-1&mode=design&t=61HgDfC671eoTIYi-0',
        github: 'https://github.com/oghenrique/star-wars-API',
        site: 'https://oghenrique.github.io/star-wars-API/'
    },
    {
        student: 'Igor Araujo',
        class: 'ds1ait-b',
        project_name: 'Rick and Morty Personagens',
        figma: 'https://www.figma.com/file/PZ0m1tMn4G0LedMZWI9Kxa/RickAndMortyAPI?type=design&node-id=0-1&mode=design&t=XVaMnj3UpjMVMovd-0',
        github: 'https://github.com/IgorAraujooo/RickAndMorty-API',
        site: 'https://igoraraujooo.github.io/RickAndMorty-API/'
    },
    {
        student: 'Julia Fonseca',
        class: 'ds1ait-a',
        project_name: 'Site de bebidas',
        figma: 'https://www.figma.com/file/rY7RQtDz4qQNoHvaHN1bsw/Untitled?type=design&node-id=0-1&mode=design&t=BixZIL5XhrRFKN17-0',
        github: 'https://github.com/Fjuliaaz/API',
        site: ''
    },
    {
        student: 'Julia Paiva',
        class: 'ds1ait-b',
        project_name: 'Studio Ghibli Movie',
        figma: 'https://www.figma.com/file/Wit1TMZuRWQVbYGNrZJ4tp/Page-Studio-Ghibli?type=design&node-id=0-1&mode=design&t=3qoi5ejtA5rbcgYF-0',
        github: 'https://github.com/Paivaas/StudioGhibli',
        site: 'https://paivaas.github.io/StudioGhibli/'
    },
    {
        student: 'Luan Oliveira',
        class: 'ds1ait-a',
        project_name: 'Azure.FM',
        figma: 'https://www.figma.com/file/K7MKFkRMoGd6I84bSlWryw/Untitled?type=design&node-id=0-1&mode=design&t=dqhrfMiSpYjwfl5w-0',
        github: 'https://github.com/luandso/Azure.FM',
        site: 'https://luandso.github.io/Azure.FM/'
    },
    {
	    student: 'Luana Magalhães',
        class: 'ds1ait-a',
        project_name: 'InstaMeow',
        figma: 'https://www.figma.com/file/mD8AyI9yMB4NmhlpSnIxmD/InstaMeow?type=design&node-id=0%3A1&mode=dev',
        github: 'https://github.com/lU4N4ht/InstaMeow_ConsumoDeAPI',
        site: 'https://lu4n4ht.github.io/InstaMeow_ConsumoDeAPI/'
    },
    {
        student: 'Luiz Henrique Vidal Araujo',
        class: 'ds1ait-a',
        project_name: 'ArtIC Searcher',
        figma: 'https://www.figma.com/file/DSbuyOpSMHqNwotcBbP1H1/Art-Institute-of-Chicago?type=design&node-id=0-1&mode=design&t=ClaHh1nWb11M1OEY-0',
        github: 'https://github.com/LUIZHVA02/P-W-F-E/tree/main/projetos-Front-End/atividade-SAS',
        site: 'https://luizhva02.github.io/P-W-F-E/projetos-Front-End/atividade-SAS/index.html'
    },
    {
        student: 'Mariana Alves',
        class: 'ds1ait-b',
        project_name: 'Movies Archive',
        figma: 'https://www.figma.com/file/VYKrNNRiPxCtxYozamTQNB/Filmes?type=design&node-id=0-1&mode=design&t=bAN1H7MZDMPJ0Mv2-0',
        github: 'https://github.com/xoxomyj/frontend-api.git',
        site: 'https://xoxomyj.github.io/frontend-api/'
    },
    {
        student: 'Matheus Zanoni',
        class: 'ds1ait-b',
        project_name: 'Anime Database',
        figma: 'https://www.figma.com/file/GELQawofprZQKRoqP0mNk1/Untitled?type=design&node-id=0-1&mode=design&t=My2yXQzUf2qdip8b-0',
        github: 'https://github.com/Mat3uss/api-anime',
        site: 'https://mat3uss.github.io/api-anime/'
    },
    {
        student: 'Pedro Pedraga',
        class: 'ds1ait-b',
        project_name: 'Clash Royale APi',
        figma: 'https://www.figma.com/file/4jy6Z40MDonIr1xktudQM5/Untitled?type=design&node-id=1-3&mode=design&t=zNiInWfG6oija7c5-0',
        github: 'https://github.com/PedrooTz/ClashRoyaleAPI',
        site: 'https://pedrootz.github.io/ClashRoyaleAPI/'
    },
    {
        student: 'Ruan Calsolari',
        class: 'ds1ait-b',
        project_name: 'Marvel Characters & Comics',
        figma: 'https://www.figma.com/file/Q7HbWJzMutgnJngWPy6Ud6/Untitled?type=design&node-id=0%3A1&mode=design&t=6vSrZrr3BlRCHqh8-1',
        github: 'https://github.com/Calsolari/Marvel-API',
        site: 'https://calsolari.github.io/Marvel-API/'
    },
    {
        student: 'Tamires Fernandes',
        class: 'ds1ait-a',
        project_name: "Ghibli's Gallery",
        figma: 'https://www.figma.com/file/qUInLCadFqj58v4oKwKKtx/Untitled?type=design&node-id=0%3A1&mode=design&t=GiBlRSXGCUVtxebE-1',
        github: 'https://github.com/oRdv/api-studioGhibli.git',
        site: 'https://ordv.github.io/api-studioGhibli/'
    },
    {
        student: 'Vitoria Azevedo',
        class: 'ds1aitb',
        project_name: 'Bíblia Sagrada',
        figma: 'https://www.figma.com/file/kIHJAotyykfIgrDhtoFEqs/B%C3%ADblia_Sagrada?type=design&node-id=0-1&mode=design&t=g03sHh4kMQyPsQQ2-0',
        github: 'https://github.com/hanabin28/Biblia_Sagrada',
        site: ''
    },
    {
        student: 'Yasmin Targino',
        class: 'ds1ait-b',
        project_name: 'Fatos sobre cachorros',
        figma: 'https://www.figma.com/file/prxfLRiiOfoNT6oWWYm7nt/Projeto-fatos-sobre-c%C3%A3es?type=design&node-id=0%3A1&mode=design&t=rkKt5XSbwV2U9Kgc-1',
        github: 'https://github.com/Emy0622/atividade_site',
        site: 'https://emy0622.github.io/atividade_site/'
    }
    
    
]

const createProjectCard = (project) => {
    
    const projectsSection = document.getElementById('projects-section')
    projectsSection.replaceChildren('')
    
    project.map((project) => {

        const projectContainer = document.createElement('div')
        projectContainer.classList.add('project-container')
        
        const projectInfo = document.createElement('div')
        projectInfo.classList.add('info')
        
        const projectTitle = document.createElement('h2')
        projectTitle.classList.add('project-title')
        projectTitle.textContent = project.project_name
        
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
        const figmaImage = document.createElement('img')
        figmaImage.src = './assets/img/figma.svg'
        figmaImage.alt = 'Logo Figma'
        
        const gitButton = document.createElement('button')
        const gitLink = document.createElement('a')
        gitLink.href = project.github
        const gitHubImage = document.createElement('img')
        gitHubImage.src = './assets/img/github.svg'
        gitHubImage.alt = 'Logo GitHub'
        
        const siteButton = document.createElement('button')
        const siteLink = document.createElement('a')
        siteLink.href = project.site
        const siteImage = document.createElement('img')
        siteImage.src = './assets/img/web.svg'
        siteImage.alt = 'Desenho do planeta terra composto de linhas laranjas'

        projectContainer.replaceChildren(projectInfo, buttons)
        projectInfo.replaceChildren(projectTitle, studentName, studentClass)
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

    const filteredProject = project.filter((project) => {
        return (
            project.class.toLocaleLowerCase().includes(filterOption)
            );
        });

    createProjectCard(filteredProject)   

})

createProjectCard(project)