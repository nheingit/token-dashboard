import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      address: 'String8683949',
      authDetail: { create: { nonce: 'String' } },
    },
    two: {
      address: 'String4971088',
      authDetail: { create: { nonce: 'String' } },
    },
  },
})

export type StandardScenario = typeof standard
