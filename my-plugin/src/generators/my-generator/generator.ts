import { libraryGenerator } from "@nx/angular/generators";
import { Tree, } from '@nx/devkit';

export async function myGeneratorGenerator(
  tree: Tree,
) {
  await libraryGenerator(tree, {
    name: 'test',
    directory: '',
  });
}

export default myGeneratorGenerator;
