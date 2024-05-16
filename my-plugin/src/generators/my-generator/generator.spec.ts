import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';
import { myGeneratorGenerator } from './generator';

describe('my-generator generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await myGeneratorGenerator(tree);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
