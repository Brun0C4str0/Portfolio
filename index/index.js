const elemProjects = document.getElementById('project__content')

const loadProjects = (projects) => {
    projects.forEach(project => {
        const elemProject = document.createElement('a')

        elemProject.setAttribute('href', project.link)
        elemProject.setAttribute('target', '_blank')

        elemProject.classList('project')

        const elemPicture = document.createElement('picture')
        const elemImg = document.createElement('img')

        elemImg.setAttribute('src', project.image)

        elemPicture.appendChild(elemImg)

        const elemStrong = document.createElement('strong')
        elemStrong.innerText = project.name

        const elemTags = document.createElement('div')
        project.tags.forEach(tag => {
            const elemTag = document.createElement('span')
            elemTag.innerText = tag

            elemTags.appendChild(elemTag)

            elemProject.appendChild(elemTags)

            elemProjects.appendChild(elemProject)
        })

    });
}





fetch('./projects.json').then(response => response.json()).then(data =>{
    
})