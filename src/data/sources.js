export const GFG = (path) => ({
  name: 'GeeksForGeeks',
  url: `https://www.geeksforgeeks.org/${path}/`,
})

export const TUTORIALS = (path) => ({
  name: 'TutorialsPoint',
  url: `https://www.tutorialspoint.com/${path}`,
})

export const BROWSERSTACK = (path) => ({
  name: 'BrowserStack',
  url: `https://www.browserstack.com/guide/${path}`,
})

export const ORACLE_DOCS = (path = 'javase/tutorial/java/concepts/') => ({
  name: 'Oracle Docs',
  url: `https://docs.oracle.com/${path}`,
})

export const DEV_JAVA = {
  name: 'dev.java',
  url: 'https://dev.java/learn/',
}

export const MDN = (path) => ({
  name: 'MDN Web Docs',
  url: `https://developer.mozilla.org/en-US/docs/${path}`,
})

export const SPRING = (path) => ({
  name: 'Spring Boot Reference',
  url: `https://docs.spring.io/spring-boot/${path}`,
})
