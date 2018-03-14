## ALiAS: Amity Linux Assistance Sapience
- The following repo contains the source code for the official website of Amity Linux Assistance Sapience. 
- The website is hosted on gh-pages itself. 
- This Website uses Staticjinja to build top-level HTML files. Follow Instructions to modify the HTML Files.

## Contribute 
- Feel free to open an issue or recommend any changes which you want to see in the website. 
- Adhere to the guidelines mentioned below if you want to contribute. 

## Guidelines 
- Make sure your PR contains `one` logical change only!
- In case there are multiple commits in your PR squash them into one. Ref : 
- `https://makandracards.com/makandra/527-squash-several-git-commits-into-a-single-commit`
- Make sure you update your REMOTE ORIGIN in case you have forked this repo : 
- `https://help.github.com/articles/syncing-a-fork/`
- Once you update the forked repo make sure you `rebase` the changes and then open the PR. 
- Ref: `http://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository`

## Instructions

### Create and activate a python virtual environment
Create a virtual environment (You may have to run ```pip install venv```)
```
virtualenv VENV_NAME
or
python -m venv VENV_NAME
```
Activate Environment:
Linux:
```
source VENV_NAME/bin/activate
```
Windows:
```
./VENV_NAME/Scripts/activate
```

### Install the requirements
```
pip install -r requirements.txt
```

### Run build.py
Run build.py to automatically build and render top level html files. (Optional: Run SimpleHTTPServer alongside for easy testing)
```
python build.py & python -m SimpleHTTPServer
```

### Make your changes
Don't make any changes to top-level HTML Files. Navigate to ```templates``` folder and make required changes in the required section/module.
StaticJinja will not track any changes made to any javascript/CSS/JSON files. Re-compile build.py to update any changes made to JSON files (no re-compile required in case of js/CSS).

### Preview your result
If you are using SimpleHTTPServer, you can view the changes at localhost:8000. If not, double-clicking the rendered index.html to view the result

## Contributors 
- @thisisayush
- @parthsharma2
- @AnimeshVerma17
- @ConformalTomb
- @aniketmaithani 
- @bhanuvrat
- @ATB00ker
