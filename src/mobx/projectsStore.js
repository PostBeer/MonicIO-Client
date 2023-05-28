import {makeAutoObservable} from "mobx";

export default class ProjectsStore {
    constructor() {
        this._projects = [];
        this._links = {};
        this._currentProject = {};
        makeAutoObservable(this);
    }


    get currentProject() {
        return this._currentProject;
    }

    get links() {
        return this._links;
    }

    get projects() {
        return this._projects;
    }

    setCurrentProject(value) {
        this._currentProject = value;
    }

    setLinks(value) {
        this._links = value;
    }

    setProjects(value) {
        this._projects = value;
    }
}