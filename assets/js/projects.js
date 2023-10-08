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