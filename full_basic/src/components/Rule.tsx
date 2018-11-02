import * as React from 'react'

import { styled } from 'looker-lens'

const InternalRule: React.SFC<{}> = () => {
  return <hr />
}

export const Rule = styled<{}>(InternalRule)`
border-top: 4px solid
${props => props.theme.colors.semanticColors.primary.borderColor};
`
