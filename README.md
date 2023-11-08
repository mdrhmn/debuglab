# Debug Lab Skills Learning Center

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

1. Clone this repository
2. Install dependencies using `yarn` (recommended)
3. Create a `.env` file with the following values:
   ```
    NUXT_PUBLIC_CLIENT_ID="fdbadfa9-e439-414d-a521-de62579f8e95"
    NUXT_PUBLIC_TENANT_ID="945c199a-83a2-4e80-9f8c-5a91be5752dd"
    NUXT_PUBLIC_API_VERSION="develop"
    NUXT_PUBLIC_BASE_URL="https://vaas-api-gateway.azure-api.net"
   ```
4. Generate the types in `.nuxt` with `yarn postinstall`
5. Checkout to `develop` branch via `git checkout develop`
6. Run the project on the development server `http://localhost:3000` with `bun dev`

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Dependencies

### Core

1. Nuxt 3
   - `nuxt`
   - `@nuxt/devtools`
2. Supabase
    - `@nuxtjs/supabase`
3.  Pinia
   - `pinia`
   - `@pinia/nuxt`
   - `@pinia-plugin-persistedstate/nuxt`
4. DayJS
   - `dayjs-nuxt`

### UI

1. Tailwind CSS
    - `@nuxtjs/tailwindcss`
    - `tailwindcss`
    - `@tailwindcss/forms`
    - `postcss`
    - `autoprefixer`
2. HeadlessUI
    - `@headlessui/vue`
    - `nuxt-headlessui`
3. Preline
    - `preline`
4. Flowbite
    - `flowbite`
1. FontAwesome
    - `@fortawesome/fontawesome-free"`
    - `@fortawesome/fontawesome-svg-core`
    - `@fortawesome/free-brands-svg-icons`
    - `@fortawesome/free-solid-svg-icons`
    - `@fortawesome/vue-fontawesome`
2. FullCalendar
    - `@fullcalendar/core`
    - `@fullcalendar/daygrid`
    - `@fullcalendar/google-calendar`
    - `@fullcalendar/interaction`
    - `@fullcalendar/list`
    - `@fullcalendar/multimonth`
    - `@fullcalendar/timegrid`
    - `@fullcalendar/vue3`
3. Heroicons
    - `@heroicons/vue`
4. Nuxt Color Mode (for dark mode)
    - `@nuxtjs/color-mode`
5. Notiwind (for push notification)
    - `@nuxtjs/color-mode`
6.  Vue Tailwind Datepicker
    - `vue-tailwind-datepicker`
7.  Vue 3 Easy Data Table
    - `vue3-easy-data-table`
8.  Vue 3 Lottie
    - `vue3-lottie`
9.  Vue 3 Lottie
    - `vue3-lottie`

### Client-side Validation

1. VeeValidate
    - `vee-validate`
    - `@vee-validate/rules`
2. Yup
    - `yup`

## Features

1. Authentication (Log In, Log Out & Register)
2. Home Page
3. Search Student Credentials
4. View Student Credentials & Progress
5. View Student Birthdays in Calendar
6. Manage Student Logbook

