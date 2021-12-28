const { Manager, Engineer, Intern, Employee } = require('./lib/classes');

function card(data) {
    if (data.type === 'Engineer') {
        return `
    <div class="row justify-content-center">
            <div class="card m-3" style="width: 20rem">
                <div class="bg-primary p-3 pb-1 text-light">
                    <h5 class="">${data.name}</h5>
                    <h5 class="">${data.role} Engineer</h5>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: 1</li>
                        <li class="list-group-item">
                            Email: <a target="_blank" href="mailto:${data.email}">${data.email}</a>
                        </li>
                        <li class="list-group-item">
                            GitHub: <a target="_blank" href="http://github.com/${data.github}">${data.github}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
    } else if (data.type === 'Employee') {
        return `
        <div class="row justify-content-center">
                <div class="card m-3" style="width: 20rem">
                    <div class="bg-primary p-3 pb-1 text-light">
                        <h5 class="">${data.name}</h5>
                        <h5 class="">${data.role}</h5>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Id: 1</li>
                            <li class="list-group-item">
                                Email: <a target="_blank" href="mailto:${data.email}">${data.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    } else if (data.type === 'Manager') {
        return `
        <div class="row justify-content-center">
                <div class="card m-3" style="width: 20rem">
                    <div class="bg-primary p-3 pb-1 text-light">
                        <h5 class="">${data.name}</h5>
                        <h5 class="">${data.role}</h5>
                        <h5 class="">${data.office}</h5>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Id: 1</li>
                            <li class="list-group-item">
                                Email: <a target="_blank" href="mailto:${data.email}">${data.email}</a>
                            </li>
                            <li class="list-group-item">
                                GitHub: <a target="_blank" href="http://github.com/${data.github}">${data.github}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    } else if (data.type === 'Intern') {

    }
}

module.exports = { card }