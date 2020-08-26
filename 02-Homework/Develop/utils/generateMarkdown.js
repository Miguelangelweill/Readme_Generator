// function to generate markdown for README
function generateMarkdown(data,githubInfos) {
  return `# ${data.title}
  ## license
  ${data.license
    .map(item => {
      return `![${item}](https://img.shields.io/badge/license-${item}-blue)`;
    })
    .join("  ")}

  ## Description
  ${data.description}

  ![Image Of Project](${data.projectImage})

  ## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#License)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Constributors
  ${data.contributing}

  ## Test
  ${data.test}

  ## Git hub user name
  ${data.username}

  ## Repository

![Image of generator](${githubInfos.imageGitHub})

[Git hub profile](${githubInfos.profile})
  
[This is my Git Hub repository](${data.repo})

`;
}

module.exports = generateMarkdown;
