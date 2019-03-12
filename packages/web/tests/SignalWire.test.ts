import behaveLikeBaseSession from '../../common/tests/behaveLike/BaseSession'
import { BladeDisconnect } from '../../common/tests/behaveLike/BladeMessages'
import SignalWire from '../src/SignalWire'

describe('SignalWire Web', () => {
  behaveLikeBaseSession.call(this, SignalWire)
  BladeDisconnect.call(this, SignalWire)
})