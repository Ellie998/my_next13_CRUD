export default function CreatePost() {
  return (
    <form>
      <ul>
        <li>카테고리</li>
        <li>
          <input type="text" placeholder="title"></input>
        </li>
        <li>
          <textarea placeholder="description"></textarea>
        </li>
        <li>
          <button>생성하기</button>
        </li>
      </ul>
    </form>
  );
}
