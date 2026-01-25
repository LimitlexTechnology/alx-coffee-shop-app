# ALX Coffee Shop App

A modern coffee shop mobile and web application built with Expo, React Native, TypeScript, and NativeWind (Tailwind CSS for React Native).

## 🚀 Features

- **Cross-Platform**: Works seamlessly on iOS, Android, and Web
- **Responsive Design**: Adapts to different screen sizes and orientations
- **Coffee Catalog**: Browse and filter coffee products by category
- **Product Details**: Detailed view with customization options (size, sugar level, etc.)
- **Shopping Cart**: Add items to cart with quantity management
- **Order Management**: View and manage your orders
- **Modern UI**: Clean, modern interface with smooth animations

## 🛠️ Tech Stack

- **Expo SDK 54**: Cross-platform development framework
- **React Native**: Mobile app development
- **TypeScript**: Type-safe JavaScript
- **NativeWind v4**: Tailwind CSS for React Native styling
- **React Navigation**: Navigation between screens
- **React Context API**: State management

## 📱 Screens

1. **Home Screen**: Featured coffee products with promotional banners
2. **Detail Screen**: Detailed product view with customization
3. **Cart Screen**: Shopping cart with order summary
4. **Order Screen**: Order history and status tracking
5. **Profile Screen**: User profile and settings

## 🔧 Development Process & Challenges

### Initial Setup
- Configured Expo SDK 54 with TypeScript strict mode
- Integrated NativeWind v4 for Tailwind CSS styling
- Set up proper project structure with `src/` directory

### Key Challenges & Solutions

#### 1. Web-Specific Image Display Issues
**Problem**: Coffee images appeared stretched and misaligned on web browsers, with grid layout issues due to scrollbar width.

**Solution**:
- Implemented responsive height calculations using `useWindowDimensions` hook
- Added web-specific scrollbar buffer detection with `Platform.OS === 'web'`
- Replaced fixed height classes with dynamic calculations
- Used explicit `style` props instead of Tailwind classes for Image components to ensure web compatibility

#### 2. Blank Image Sections
**Problem**: Image containers appeared blank on certain screens, particularly in the coffee card components.

**Solution**:
- Refactored [CoffeeCard.tsx](src/components/CoffeeCard.tsx#L30-36) to use wrapper View components
- Replaced Tailwind `className` with explicit `style={{ width: '100%', height: '100%' }}` for Image dimensions
- Added proper background colors to image containers for better visibility

#### 3. Image Zooming Issues on Detail & Order Screens
**Problem**: Coffee cup images were zoomed in too closely, showing only partial views instead of the full product.

**Solution**:
- Changed `resizeMode` from `"cover"` to `"contain"` in [DetailItem.tsx](src/screens/DetailItem.tsx#L67) and [Order.tsx](src/screens/Order.tsx#L101)
- Implemented consistent `aspect-square` containers for uniform image sizing
- Ensured proper container dimensions for thumbnail views

#### 4. JSX Syntax Errors
**Problem**: JSX nesting errors in CoffeeCard component caused rendering issues.

**Solution**:
- Fixed improper View nesting by removing extra closing `</View>` tags
- Ensured proper component hierarchy with rating badges positioned correctly
- Validated all JSX syntax through TypeScript diagnostics

#### 5. Responsive Design Implementation
**Problem**: Layout needed to adapt seamlessly across mobile, tablet, and desktop screens.

**Solution**:
- Implemented dynamic grid calculations based on screen width
- Created responsive scaling for headers, banners, and product grids
- Used consistent spacing and sizing across all breakpoints

### Performance Optimizations
- Optimized image loading with proper `resizeMode` settings
- Implemented efficient grid layouts with proper spacing
- Used React Native's built-in performance optimizations

## 🎯 Key Technical Decisions

1. **NativeWind Integration**: Chosen for familiar Tailwind CSS syntax with React Native compatibility
2. **TypeScript Strict Mode**: Enabled for better type safety and development experience
3. **Platform-Specific Adjustments**: Used `Platform` API for web-specific styling adjustments
4. **Image Strategy**: Used `resizeMode="cover"` for consistent coverage and `resizeMode="contain"` for full product visibility

## 📋 Installation & Setup

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd alx-coffee-shop-app

# Install dependencies
npm install

# Start the development server
npm start
```

## 🌐 Web Development

The app includes web-specific optimizations:
- Responsive grid layouts with scrollbar buffer calculations
- Web-compatible image styling with explicit style props
- Cross-browser compatibility testing

## 📱 Mobile Development

For mobile development:
- iOS and Android compatibility through Expo
- Native navigation patterns
- Touch-optimized UI components

## 🔍 Testing

- Manual testing across different screen sizes
- Cross-platform compatibility verification
- Image display validation on all screens

## 🚀 Deployment

The app can be deployed to:
- **Web**: Using Expo's web build
- **iOS**: Through App Store with Expo build service
- **Android**: Through Play Store with Expo build service

## 📚 Lessons Learned

1. **Web vs Mobile Styling**: Web requires different image handling approaches than mobile
2. **Responsive Design**: Must account for scrollbar width and browser-specific behaviors
3. **Image Optimization**: Proper `resizeMode` selection is crucial for product visibility
4. **Cross-Platform Testing**: Essential to test on both web and mobile platforms
5. **Component Architecture**: Proper View nesting prevents rendering issues

## 🔄 Future Improvements

- Add unit and integration tests
- Implement lazy loading for images
- Add offline functionality
- Integrate with backend API
- Add user authentication
- Implement payment processing

## 📄 License

This project is part of ALX learning curriculum.

---

**Note**: This documentation reflects the development process and challenges encountered during the creation of this coffee shop application, with specific focus on the image display and responsive design issues that were successfully resolved.