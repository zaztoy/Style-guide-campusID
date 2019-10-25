import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

const Emoji = () => {
  return (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  )
}

export default Emoji
