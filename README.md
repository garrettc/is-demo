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

This repository uses the [pre-commit](https://pre-commit.com/) framework to perform certain sanity checks during development. These include code formatting with [Black](https://black.readthedocs.io/en/stable/index.html) and [DjHTML](https://github.com/rtts/djhtml), import sorting with [isort](https://pycqa.github.io/isort/index.html), and detecting any private keys you may have accidentally added to the repository. For a full list see the file `<install-directory>/.pre-commit-config.yaml`.

Run pre-commit install to set up the git hook scripts

```
$ pre-commit install
```

Now pre-commit will run automatically on git commit.

### Configuration


## Todo
