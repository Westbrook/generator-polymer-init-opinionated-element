'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.appname = this._dashedCaseFromSpaces(this.appname);
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the badass ' +
          chalk.red('generator-polymer-init-opinionated-element') +
          ' generator!'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'authorName',
        message: 'What is your name?',
        default: 'author',
        store: true
      },
      {
        type: 'input',
        name: 'orgName',
        message: 'What is your GitHub username or organization?',
        default: 'org',
        store: true
      },
      {
        type: 'input',
        name: 'orgNamespace',
        message:
          'What is the namespace that you would like to build this component into?',
        default: 'org',
        store: true
      },
      {
        type: 'input',
        name: 'elementName',
        message: 'What would you like this element to be called?',
        validate: input =>
          input.indexOf('-') === -1 ? "Element name needs a '-'" : true,
        default: this.appname
      },
      {
        type: 'input',
        name: 'elementDescription',
        message: 'What does this element do?',
        default: 'nothing yet'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.className = this._makeClassName(props.elementName, props.orgNamespace);
    });
  }

  _makeClassName(element, namespace) {
    if (typeof element !== 'undefined') {
      let regex = new RegExp(namespace, 'gi');
      return element
        .split('-')
        .map(name => {
          if (name.match(regex)) return '';
          return name.charAt(0).toUpperCase() + name.slice(1);
        })
        .join('');
    }
    return element;
  }

  _dashedCaseFromSpaces(name) {
    if (typeof name !== 'undefined') {
      return name.replace(/\s/g, '-');
    }
  }

  writing() {
    const elementName = this.props.elementName;

    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)*`,
      this.destinationPath(),
      this.props
    );

    this.fs.copyTpl(
      `${this.templatePath()}/**/.!(gitignore)*`,
      this.destinationRoot(),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('.gitignorefile'),
      this.destinationPath(`.gitignore`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('src/.circleci/_config.yml'),
      this.destinationPath(`.circleci/config.yml`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath(`src/_element.html`),
      this.destinationPath(`${elementName}.html`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath(`src/_element.js`),
      this.destinationPath(`${elementName}.js`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath(`src/_element-styles.html`),
      this.destinationPath(`${elementName}-styles.html`),
      this.props
    );
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: true,
      yarn: true
    });
  }
};
