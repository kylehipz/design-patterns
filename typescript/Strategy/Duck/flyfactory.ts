import NoFly from './nofly';
import SmoothFly from './smoothfly';

export default function FlyFactory(type: string) {
  if (type === 'nf') {
    return new NoFly();
  } else {
    return new SmoothFly();
  }
}
