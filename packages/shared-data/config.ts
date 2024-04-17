const config = {
  auth: {
    rate_limits: {
      email: {
        inbuilt_smtp_per_hour: {
          value: 3,
        },
      },
      magic_link: {
        tau: {
          value: 60,
          unit: 'seconds',
        },
        validity: {
          value: 24,
          unit: 'hours',
        },
      },
      otp: {
        tau: {
          value: 60,
          unit: 'seconds',
        },
        validity: {
          value: 24,
          unit: 'hours',
        },
      },
    },
  },
} as const

export default config
