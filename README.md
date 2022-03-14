# EJS Action

Create a final file using an ejs file with a JSON variable as

# Usage
```yml
jobs:
  ejsAction:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Show template file
        run: cat templates/some.ejs
      - name: EJS Action
        uses: yogonza524/ejs-action@v1.3
        with:
          fileTemplate: 'templates/some.ejs'
          variables: '{"name" : "Pepe"}'
          fileOutput: 'templates/output.txt'
      - name: Show output file
        run: cat templates/output.txt
```
![EJS Action](https://i.imgur.com/4d5MlTk.png)
