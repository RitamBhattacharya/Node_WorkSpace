const YAML=require('js-yaml');
const fs=require('fs');


/*try {
    const config_file=fs.readFileSync('YAML/config.yaml');
    const config=YAML.load(config_file);
    console.log(config);
} catch (error) {
    console.error(error);
}*/

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

const YAML_data=YAML.dump(JSON_data,{indent:4});
console.log(YAML_data);