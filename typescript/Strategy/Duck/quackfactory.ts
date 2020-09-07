import Quackable from './quackable';
import NoQuack from './noquack';
import LoudQuack from './loudquack';
import SilentQuack from './silentquack';

export default function QuackFactory(type: string): Quackable {
  if (type === 'nq') {
    return new NoQuack();
  } else if (type === 'lq') {
    return new LoudQuack();
  } else {
    return new SilentQuack();
  }
}
