import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const AppButton = props => {
    const {
        onClick,
        backgroundColor,
        size,
        disabled,
        children,
        title
    }  = props

    return (        
        <Button colorScheme={backgroundColor} isDisabled={disabled} size={size ? size : "lg"} >
           {children}
           {title}
        </Button>
    )
}

export default AppButton;