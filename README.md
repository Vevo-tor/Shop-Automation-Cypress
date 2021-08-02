# Test automation homework Interview
## Getting started:  


### **Installation**:

<br>

```

> Clone the reposity: git clone https://github.com/Vevo-tor/Test-automation-homework-Interview.git

```

```

> npm install

```

<br>

---

<br> 

### **How to use**:

<br>

If you would like to modify any values, you can find them all in **Cypress > Support > Variables > accountInformation.js**

<br>

To run tests:
```

> npx cypress open

```
To run tests in headless mode:
```

> npm run e2e 

```

### or

<br>

```

> npx cypress run

```


<br>

---



## Additional Notes:

<br>

Added a workflow where tests run automatically as schedules. **At 03:00 on every day-of-week from Monday through Friday**. Can be found in **Github > Workflows > scheduled.yml**

<br>

Added an additional workflow that test run on merge to see whether any changes impacted the tests. Can be found in **Github > Workflows > merge.yml**