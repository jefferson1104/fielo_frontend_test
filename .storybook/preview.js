import { Fragment } from 'react'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f1f2f6',
      },
      {
        name: 'dark',
        value: '#1e272e',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <Fragment>
      <GlobalStyles />
      <Story />
    </Fragment>
  )
]
