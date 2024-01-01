-- Tạo table courses
create table courses (
	id int not null,
	name varchar(50) not null,
	price float,
	detail text,
	teacher_id int not null,
	active int,
	created_at timestamp,
	updated_at timestamp
)

-- Thêm cột description
alter table courses add column description text

-- Đổi tên detail -> content
alter table courses rename column detail to content

-- ràng buộc chuyển thành NOT NULL
alter table courses alter column content set not null


-- Tạo table teachers
create table teachers (
	id int not null,
	name varchar(50) not null,
	bio text,
	created_at timestamp,
	updated_at timestamp
)

-- Thêm 3 giảng viên vào bảng teacher, mỗi giảng viên thêm 3 khóa học
insert into teachers(id, name, bio, created_at, updated_at) values
(1, 'Nguyen Van A', 'Bio 1', NOW(), NOW()),
(2, 'Nguyen Van B', 'Bio 2', NOW(), NOW()),
(3, 'Nguyen Van C', 'Bio 3', NOW(), NOW())

insert into courses(id, name, price, detail, teacher_id, active, created_at, updated_at) values
(1, 'Course 1', 1000, 'detail 1', 1, 1, NOW(), NOW()),
(2, 'Course 2', 2000, 'detail 2', 1, 0, NOW(), NOW()),
(3, 'Course 3', 3000, 'detail 3', 1, 1, NOW(), NOW()),
(4, 'Course 4', 5000, 'detail 4', 2, 1, NOW(), NOW()),
(5, 'Course 5', 2000, 'detail 5', 2, 0, NOW(), NOW()),
(6, 'Course 6', 1000, 'detail 6', 2, 1, NOW(), NOW()),
(7, 'Course 7', 3000, 'detail 7', 3, 1, NOW(), NOW()),
(8, 'Course 8', 4000, 'detail 8', 3, 1, NOW(), NOW()),
(9, 'Course 9', 6000, 'detail 9', 3, 1, NOW(), NOW())

-- Sửa tên và giá từng khóa học thành tên mới và giá mới 
UPDATE courses set name = concat('Coursee ', id), price = 1000 * id, updated_at = NOW();

-- Sửa lại bio của từng giảng viên
UPDATE teachers set bio = concat('Biooo ', id), updated_at = NOW();4

-- Hiển thị
select * from teachers join courses on teachers.id = courses.teacher_id







