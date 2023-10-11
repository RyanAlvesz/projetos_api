'use strict'

const searchBar = document.getElementById('input')

const select = document.getElementById('filter-options')
let filterOption = 'ds1'

let project = [
    
    {
        student: 'Ryan Alves',
        class: 'ds1ait-b',
        project_name: 'Harry Potter Wiki',
        project_image: 'https://github.com/RyanAlvesz/harry_potter/raw/main/img/hp_wiki.png',
        figma: 'https://www.figma.com/file/lfhuuXMmv9WVn4yyYs4Uor/Harry-Potter?type=design&node-id=0%3A1&mode=design&t=nPPzwnHYPWPXps39-1',
        github: 'https://github.com/RyanAlvesz/harry_potter',
        site: 'https://ryanalvesz.github.io/harry_potter/'
    },
    {
        student: 'Julia Paiva',
            class: 'ds1ait-b',
            project_name: 'Studio Ghibli Movie',
            project_image: 'https://github.com/Paivaas/StudioGhibli/blob/main/movie/img/Studio%20Ghibli%20Movie.png?raw=true',
            figma: 'https://www.figma.com/file/Wit1TMZuRWQVbYGNrZJ4tp/Page-Studio-Ghibli?type=design&node-id=0-1&mode=design&t=3qoi5ejtA5rbcgYF-0',
            github: 'https://github.com/Paivaas/StudioGhibli',
            site: 'https://paivaas.github.io/StudioGhibli/'
    },
    {
        student: 'Pedro Pedraga',
            class: 'ds1ait-b',
            project_name: 'Clash Royale APi',
            project_image: 'https://user-images.githubusercontent.com/124139371/274326490-6588b3ff-5f3c-4a32-823b-6025f42e2b5d.png',
            figma: 'https://www.figma.com/file/4jy6Z40MDonIr1xktudQM5/Untitled?type=design&node-id=1-3&mode=design&t=zNiInWfG6oija7c5-0',
            github: 'https://github.com/PedrooTz/ClashRoyaleAPI',
            site: 'https://pedrootz.github.io/ClashRoyaleAPI/'
    },
    {
        student: 'Gabriela Fernandes',
            class: 'ds1ait-b',
            project_name: 'Marvel Characters & Comics',
            project_image: 'https://user-images.githubusercontent.com/124157058/274400312-924d88d4-fa3a-43b4-bb26-48f3d2235933.png',
            figma: 'https://www.figma.com/file/rygsayOYqoFatqlNt2rqYP/marvel-api?type=design&node-id=0%3A1&mode=design&t=XgP7q3AcKphImgHH-1',
            github: 'https://github.com/gabfernandes8/marvel-pwfe-api',
            site: 'https://gabfernandes8.github.io/marvel-pwfe-api/'
    },
    {
        student: 'Matheus Zanoni',
            class: 'ds1ait-b',
            project_name: 'Anime Database',
            project_image: 'https://user-images.githubusercontent.com/123570240/274327290-23581b49-77be-41ea-8d7a-bf88d205771d.png',
            figma: 'https://www.figma.com/file/GELQawofprZQKRoqP0mNk1/Untitled?type=design&node-id=0-1&mode=design&t=My2yXQzUf2qdip8b-0',
            github: 'https://github.com/Mat3uss/api-anime',
            site: 'https://mat3uss.github.io/api-anime/'
    }
    
    
    
]

const createProjectCard = (project) => {
    
    const projectsSection = document.getElementById('projects-section')
    projectsSection.replaceChildren('')
    
    project.map((project) => {

        const projectContainer = document.createElement('div')
        projectContainer.classList.add('project-container')
        
        const projectImage = document.createElement('a')
        projectImage.classList.add('project-img')
        projectImage.href = project.site
        projectImage.style.backgroundImage = `url(${project.project_image})`
        
        const projectInfo = document.createElement('div')
        projectInfo.classList.add('info')
        
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
        
        projectContainer.replaceChildren(projectImage, projectInfo, buttons)
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

    const filteredProject = project.filter((project) => {
        return (
            project.class.toLocaleLowerCase().includes(filterOption)
            );
        });

    createProjectCard(filteredProject)   

})

createProjectCard(project)