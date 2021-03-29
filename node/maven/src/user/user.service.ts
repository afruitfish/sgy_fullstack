// import { connection } from '../app/database/mysql';
import { userModel } from './user.model'
// /**
//  * 新增文章
//  */
// export const getUserByName = async (name: string) => {
//     const statement = `
//     SELECT * FROM user WHERE name = ${name}  
//   `;
//     // 每次用户访问 走数据库？ 
//     // 保存   
//     //  list select  redis 
//     const [data] = await connection.promise().query(statement);
//     console.log(data);

//     if (data[0]) {
//         console.log("1");

//         return false
//     }
//     else {
//         return true
//     }
// }
/**
 * 添加用户
 */
export const createUser = async (user: userModel) => {
    const statement = `
    INSERT INTO user
    SET ?
  `;
    // 每次用户访问 走数据库？ 
    // 保存   
    //  list select  redis 
    const [data] = await connection.promise().query(statement, user);
    return data
}
import { connection } from '../app/database/mysql';

export const getUser = (condition: string) => {
    return async (param: string | number) => {
        // console.log(param, '-----');
        const statement = `
      SELECT
        user.id,
        user.name
      FROM
        user
      WHERE
        ${condition} = ?
    `;

        const [data] = await connection.promise().query(statement, param);
        console.log(data);
        return data[0] ? data[0] : null
    }
}

export const getUserByName = getUser('user.name');
export const getUserById = getUser('user.id');
