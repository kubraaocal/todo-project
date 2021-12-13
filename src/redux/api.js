// import axios from 'react-native-axios';

// export default class Api {
//   static instance = Api.instance || new Api();

//   login = async () => {
//     try {
//       let res = await axios.get('http://192.168.225.72:3000/users');
//       if (res.status == 200) {
//         return {status: 'success', user: res.data};
//       }
//     } catch (err) {}
//   };

//   //   singUp = async (email, sifre) => {
//   //     await axios
//   //       .post(
//   //         'http://192.168.225.72:3000/users',
//   //         {
//   //           email: email,
//   //           sifre: sifre,
//   //         },
//   //         {
//   //           headers: {
//   //             'Content-Type': 'application/json',
//   //             Accept: 'application/json',
//   //           },
//   //         },
//   //       )
//   //       .then(function (response) {
//   //         console.log(response.status);
//   //         return {status: 'success', user: response.data};
//   //       })
//   //       .catch(function (error) {
//   //         console.log('Error, ', error);
//   //       });
//   //   };

//   singUp = async (email, sifre) => {
//     try {
//       let res = await axios.post(
//         'http://192.168.225.72:3000/users',
//         {
//           email: email,
//           sifre: sifre,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//         },
//       );
//       if (res.status == 200) {
//         return {status: 'success', user: res.data};
//       }
//     } catch (err) {}
//   };
// }

import axios from 'react-native-axios';

export const loadTitleApi = async () =>
  await axios.get('http://192.168.225.72:3000/titles');

export const createTitleApi = async titles =>
  await axios.post('http://192.168.225.72:3000/titles', titles);

export const loadTodoApi = async () =>
  await axios.get('http://192.168.225.72:3000/todos');

export const createTodoApi = async todos =>
  await axios.post('http://192.168.225.72:3000/todos', todos);

export const deleteTitleApi = async titleId =>
  await axios.delete(`http://192.168.225.72:3000/titles/${titleId}`);

export const updateTitleApi = async (titleId, titleInfo) =>
  await axios.put(`http://192.168.225.72:3000/titles/${titleId}`, titleInfo);

export const updateTodoApi = async (todoId, todoInfo) =>
  await axios.put(`http://192.168.225.72:3000/todos/${todoId}`, todoInfo);

export const deleteTodoApi = async todoId =>
  await axios.delete(`http://192.168.225.72:3000/todos/${todoId}`);
