import { libraryGenerator } from "@nx/angular/generators";
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

describe('my-generator generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    // this will fail:
    const result =   await libraryGenerator(tree, {
      name: 'test',
      directory: '',
    });

    expect(result).toBeDefined();
  });
});
