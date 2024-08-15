const YAML=require('yamljs');

//const config=YAML.load('YAML/config.yaml');

//console.log(config);


const JSON_data = {
    'mysql-database': {
        port: 3306,
        username: 'root',
        password: 'root',
        dbName: 'nodepractise'
    },
    'oracle-database': {
        port: 1521,
        username: 'system',
        password: 'Ritam123'
    }
};

const YAML_data=YAML.stringify(JSON_data);
console.log(YAML_data);