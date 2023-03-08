import { createMachine, state, transition } from 'robot3'

export default function (lib) {
  return createMachine({
    idle: state(),
    loading: state(),

  })
}