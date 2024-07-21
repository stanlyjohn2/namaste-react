# Namaste React

git init - To init the git repo locally
npm init - Initializes npm and creates the package.json file
npm install -D parcel - Installing dev dependencies
npx parcel index.html - Executing a package
npx parcel build index.html - Production build 

# Parcel - It is a beast
- Dev Build
- Local Server
- Hot Module Replacement (HMR)
- File Watching Algorithm - written in C++
- Faster Builds because of caching
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing 
- Code Splitting
- Differential Bundling - Bundling based on different browsers or mobiles
- Diagnostics
- Error Handling
- HTTPs support
- Tree Shaking - remove unuseed code
- Different dev and prod bundles

# "main": "App.js", not needed in package.json as we are using parcel bundler to specify entrypoint
