# IS Demo

## Notes

- Requires Python 3.10.*


## Local setup

Clone this repository and then:

```
$ cd <install-directory>
```

Create and activate your virtual environment:

```
$ python -m venv env
$ source ./env/bin/activate
```

Install requirements:

```
$ pip install -r requirements/requirements-dev.txt
```

(NOTE: `requirements-dev.txt` includes `requirements.txt` automatically)

### Pre-commit hooks

This repository uses the [pre-commit](https://pre-commit.com/) framework to perform certain sanity checks during development. This includes detecting any private keys you may have accidentally added to the repository. For a full list see the file `<install-directory>/.pre-commit-config.yaml`.

Run pre-commit install to set up the git hook scripts

```
$ pre-commit install
```

Now pre-commit will run automatically on git commit.

## Running

To run the app with a basic HTTP server:

```
$ python -m http.server
```

## Todo

- [x] Retrieve data and style
- [ ] Table sorting
- [ ] Write some tests
- [ ] Add Flask or Django app to enable caching of results and more interactive filters
- [ ] Bundle javascript to reduce HTTP requests
