import type { ComponentMeta } from '@storybook/react'

import MyProfilePage from './MyProfilePage'

export const generated = () => {
  return <MyProfilePage />
}

export default {
  title: 'Pages/MyProfilePage',
  component: MyProfilePage,
} as ComponentMeta<typeof MyProfilePage>
