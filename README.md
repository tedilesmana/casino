# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Point Description: 
- Feed tambahan untuk permainan jackpot
- Buat Pita untuk New dan Top
- Palet warna #8DC63F = hijau, #373737 = black gray, #FFFFFF = white, #FCFCFC = light gray


1. Tata letak permainan sesuai desain, dengan responsivitas diingat. => done
2. Izinkan pengguna untuk menavigasi antar kategori, dengan state “aktif” untuk kategori yang dipilih. (terlihat pada desain) => Done
3. Tampilkan jackpot saat ini untuk permainan yang sesuai saat halaman dirender. => Done
4. Perbarui jackpot saat ini untuk permainan yang sesuai setiap beberapa detik. => Done
5. Permainan "New" dan "Top" memiliki pita relevan yang menunjukkan kategorinya saat berada dalam konteks kategori yang bukan “top” atau “new”. (misalnya, saat permainan “top” juga ada di kategori “slots”)
6. Hanya untuk web: Saat mengarahkan kursor ke permainan, muncul tombol "play" dan nama permainan. (klik tidak melakukan apa-apa)
7. Kelompokkan kategori "ball", "virtual", dan "fun" dalam kategori “Other”.
8. Tulis unit test menggunakan Jest.