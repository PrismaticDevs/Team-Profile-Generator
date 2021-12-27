// PrismaticDevelopmentStudios

function template(data) {
    if (data.type === "Back-End") {
        data.type = `<i class="mr-1 fas fa-database"></i>` + "Back-End"
    } else if (data.type === "Front-End") {
        data.type = `<i class="mr-1 fab fa-html5"></i><i class="mr-1 fab fa-css3-alt"></i>` + "Front-End"
    } else if (data.type === "Full-Stack") {
        data.type = `<i class="mr-1 fab fa-html5"></i><i class="mr-1 fab fa-css3-alt"></i><i class="mr-1 fas fa-database"></i>` + "Full-Stack"
    } else if (data.type === "QA") {
        data.type = `<i class="mr-1 fas fa-glasses"></i>` + "QA"
    }
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prismatic Dev Team</title>
    </title>
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/8f9f5cba36.js" crossorigin="anonymous"></script>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<body>
    <div class="home">
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
                        <li class="list-group-item">
                            GitHub: <a target="_blank" href="http://github.com/${data.github}">${data.github}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>
    `
}

module.exports = { template }