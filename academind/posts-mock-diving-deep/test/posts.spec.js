import { describe, vi, expect, it } from 'vitest';
import { extractPostData } from '../posts/posts';

describe('Post Module', () => {
  it('should extract  title & content from the provided form data.', () => {
    const form = new FormData();

    const dataMap = {
      title: 'Test Title',
      content: 'Test Content',
    };

    form.append('title', dataMap['title']);
    form.append('content', dataMap['content']);

    const postData = extractPostData(form);

    expect(postData).toHaveProperty('title', dataMap['title']);
    expect(postData.content).toBe(dataMap['content']);
  });
});
