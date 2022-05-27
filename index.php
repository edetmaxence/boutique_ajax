<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>boutique en ligne</title>

    <script src="categories.js" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>

<body>
    <header>
        <ul class="nav">
            <li class="nav-item">

            </li>

        </ul>
    </header>

    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-md-2 showAll" type="button">all</button>
                        <button class="btn btn-primary showLimit-5" type="button">limit 5</button>
                        <button class="btn btn-primary desc" type="button">trie DESC</button>
                    </div>
                </div>
          
                <div class="col-12">
                    <table>
                        <thead>
                            <th>image</th>
                            <th>libelle</th>
                            <th>prix</th>
                            <th>detail</th>
                        </thead>
                        
                    </table>
                </div>
            </div>
        </div>
    </main>

</body>

</html>