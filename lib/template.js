// HTML Template
let index = 1;

function engineer(data) {
    return `
            <div class="card-lg-6 m-2" style="width: 20rem">
                <div class="bg-primary p-3 pb-1 text-light">
                    <h5>${data.name}</h5>
                    <h5><i class="mr-1 fas fa-glasses"></i> Engineer</h5>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${index++}</li>
                        <li class="list-group-item">
                            Email: <a  href="mailto:${data.email}">${data.email}</a>
                        </li>
                        <li class="list-group-item">
                            GitHub: <a href="http://github.com/${data.github}" target="_blank">${data.github}</a>
                        </li>
                    </ul>
                </div>
            </div>
    `
}

function manager(data) {
    return `
            <div class="card-lg-6 m-2 shadow" style="width: 20rem">
                <div class="bg-primary p-3 pb-1 text-light">
                    <h5>${data.name}</h5>
                    <h5><i class="fa-solid fa-mug-hot"></i>  Manager</h5>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${index++}</li>
                        <li class="list-group-item">
                            Email: <a  href="mailto:${data.email}">${data.email}</a>
                        </li>
                        <li class="list-group-item">
                           Office Number: ${data.office}
                        </li>
                    </ul>
                </div>
            </div>
    `
}

function intern(data) {
    return `
            <div class="card-lg-6 m-2" style="width: 20rem">
                <div class="bg-primary p-3 pb-1 text-light">
                    <h5y
                    tim>${data.name}</h5>
                    <h5><i class="fa-solid fa-graduation-cap"></i> Intern</h5>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${index++}</li>
                        <li class="list-group-item">
                            Email: <a  href="mailto:${data.email}">${data.email}</a>
                        </li>
                        <li class="list-group-item">
                           School: ${data.school}
                        </li>
                    </ul>
                </div>
            </div>
    `
}


module.exports = { engineer, manager, intern }