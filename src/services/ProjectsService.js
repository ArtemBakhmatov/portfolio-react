class ProjectsService {
    getResourse = async (url) => {
        const result = await fetch(url);

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }

        return await result.json();
    }

    getAllProjects = () => {
        return this.getResourse(`https://database.bakhmatovweb.ru/db.json`);
    }
}

export default ProjectsService;