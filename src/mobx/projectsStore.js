import {makeAutoObservable} from "mobx";

export default class ProjectsStore {
    constructor() {
        this._projects = [];
        this._links={};
        this._currentProject={};
        makeAutoObservable(this);
    }


    get currentProject() {
        return this._currentProject;
    }

    setCurrentProject(value) {
        this._currentProject = value;
    }

    get links() {
        return this._links;
    }

    setLinks(value) {
        this._links = value;
    }

    get projects() {
        return this._projects;
    }

    setProjects(value) {
        this._projects = value;
    }
}