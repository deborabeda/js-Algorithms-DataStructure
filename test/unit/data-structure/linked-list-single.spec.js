import LinkedList from '../../../src/data-structure/linked-list-single'

describe('Linked List', () => {
  describe('push, insert', () => {
    it('should be able to push an element', () => {
      let list = new LinkedList()
      list.push(1)
      expect(list.size()).toEqual(1)
    })

    it('should be able to push two elements', () => {
      let list = new LinkedList()
      list.push(1)
      list.push(2)
      expect(list.size()).toEqual(2)
    })

    it('should be able to insert an elemenst in the head of the list', () => {
      let list = new LinkedList()
      list.push('Dewey')
      list.push('Louie')

      expect(list.insert('Huey', 0)).toEqual(true)
      expect(list.size()).toEqual(3)
      expect(list.toString()).toEqual('Huey,Dewey,Louie')
    })

    it('should be able to insert an elemenst in the tail of the list', () => {
      let list = new LinkedList()
      list.push('Huey')
      list.push('Dewey')

      expect(list.insert('Louie', 2)).toEqual(true)
      expect(list.size()).toEqual(3)
      expect(list.toString()).toEqual('Huey,Dewey,Louie')
    })

    it('should be able to insert an elemenst in any position in list', () => {
      let list = new LinkedList()
      list.push('Huey')
      list.push('Louie')

      expect(list.insert('Dewey', 1)).toEqual(true)
      expect(list.size()).toEqual(3)
      expect(list.toString()).toEqual('Huey,Dewey,Louie')
    })

    it('should return false when try to insert outside the list limit', () => {
      let list = new LinkedList()
      list.push('Huey')
      list.push('Louie')

      expect(list.insert('Dewey', 3)).toEqual(false)
    })
  })

  describe('remove, removeAt', () => {
    it('should be able to remove an elemenst in the head of the list', () => {
      let list = new LinkedList()
      list.push('Huey')
      list.push('Dewey')
      list.push('Louie')

      expect(list.removeAt(0)).toEqual('Huey')
      expect(list.size()).toEqual(2)
      expect(list.toString()).toEqual('Dewey,Louie')
    })

    it('should be able to remove an elemenst in the tail of the list', () => {
      let list = new LinkedList()
      list.push('Huey')
      list.push('Dewey')
      list.push('Louie')

      expect(list.removeAt(2)).toEqual('Louie')
      expect(list.size()).toEqual(2)
      expect(list.toString()).toEqual('Huey,Dewey')
    })

    it('should be able to remove an elemenst in any index of the list', () => {
      let list = new LinkedList()
      list.push('Huey')
      list.push('Dewey')
      list.push('Louie')

      expect(list.removeAt(1)).toEqual('Dewey')
      expect(list.size()).toEqual(2)
      expect(list.toString()).toEqual('Huey,Louie')
    })

    it('should return undefined when index outside the list limit', () => {
      let list = new LinkedList()
      list.push('Huey')
      list.push('Dewey')
      list.push('Louie')

      expect(list.removeAt(3)).toEqual(undefined)
    })

    it('should be able to remove the elemenst when in the head of the list', () => {
      let list = new LinkedList()
      list.push('Huey')
      list.push('Dewey')
      list.push('Louie')

      expect(list.remove('Huey')).toEqual('Huey')
      expect(list.size()).toEqual(2)
      expect(list.toString()).toEqual('Dewey,Louie')
    })

    it('should be able to remove the elemenst when in the tail of the list', () => {
      let list = new LinkedList()
      list.push('Huey')
      list.push('Dewey')
      list.push('Louie')

      expect(list.remove('Louie')).toEqual('Louie')
      expect(list.size()).toEqual(2)
      expect(list.toString()).toEqual('Huey,Dewey')
    })

    it('should be able to remove the elemenst of the list', () => {
      let list = new LinkedList()
      list.push('Huey')
      list.push('Dewey')
      list.push('Louie')

      expect(list.remove('Dewey')).toEqual('Dewey')
      expect(list.size()).toEqual(2)
      expect(list.toString()).toEqual('Huey,Louie')
    })

    it('should return undefine when element not exist in list', () => {
      let list = new LinkedList()
      list.push('Huey')
      list.push('Dewey')
      list.push('Louie')

      expect(list.remove('other')).toEqual(undefined)
    })
  })

  describe('empty, size, toString, indexOf', () => {
    it('should return empty for a new list', () => {
      let list = new LinkedList()
      expect(list.isEmpty()).toBeTruthy()
    })

    it('should return size equals to 0 for a new list', () => {
      let list = new LinkedList()
      expect(list.size()).toEqual(0)
    })

    it('should return an empty string for a empty list', () => {
      let list = new LinkedList()
      expect(list.toString()).toEqual('')
    })

    it('should return an string with elemenst in list', () => {
      let list = new LinkedList()
      list.push(1)
      list.push(2)
      list.push(3)
      expect(list.size()).toEqual(3)
      expect(list.toString()).toEqual('1,2,3')
    })

    it('should return index when element exist in list', () => {
      let list = new LinkedList()
      list.push(1)
      expect(list.indexOf(1)).toEqual(0)
    })

    it('should return index -1 when element not exist in list', () => {
      let list = new LinkedList()
      list.push(1)
      expect(list.indexOf(2)).toEqual(-1)
    })
  })
})
