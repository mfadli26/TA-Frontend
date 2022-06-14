<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" className="h-100">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Pusat Peminjaman Arsip</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link href="/css/app.css" rel="stylesheet">
    <!-- Styles -->

    <style>
        .btn-hover:hover {
            color: red !important;
        }

        .btn-hover {
            transition: color 0.2s linear;
        }

        .link-active {
            color: red !important;
        }
    </style>

</head>

<body className="antialiased d-flex flex-column h-100">
    <main className="flex-shrink-0">
        @include('client.layout.header_arsip')
        @include('client.layout.breadcrumb_arsip')
        <div className="container-fluid">
            <div className="wrapper py-3 pt-5" style="padding-bottom: 100px !important;">
                <div className="container">
                    <div className="card box-shadow">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-6">
                                    Pencarian
                                </div>
                                <div className="col-md-6">
                                    <form action="/archive/main" method="post">
                                        {{ csrf_field() }}
                                        <div className="input-group">
                                            <input type="text" className="form-control rounded-0" name="search" value="{{$data->search}}" placeholder="Masukkan Nama atau Nomor Arsip">
                                            <button className="btn btn-success text-white rounded-0" type="submit">Cari Arsip</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Nomor</th>
                                        <th scope="col">Judul</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($data->archive as $archive)
                                    <tr>
                                        <th scope="row">{{$archive->nomor_surat}}</th>
                                        <td>{{$archive->petugas_registrasi}}</td>
                                        <td><button className="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#modal_{{$loop->index}}" type="button">Pilih</button></td>
                                    </tr>
                                    <!-- Modal -->
                                    <div className="modal fade" id="modal_{{$loop->index}}" tabindex="-1" aria-labelledby="label_{{$loop->index}}" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="label_{{$loop->index}}">Informasi Detail Arsip</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row mb-3">
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <span className="form-label m-0">Nomor Arsip</span>
                                                        </div>
                                                        <span className="form-label m-0 col-md-1">:</span>
                                                        <span className="form-label m-0 col-md-8">{{$archive->nomor_arsip}}</span>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <span className="form-label m-0">Nomor Surat</span>
                                                        </div>
                                                        <span className="form-label m-0 col-md-1">:</span>
                                                        <span className="form-label m-0 col-md-8">{{$archive->nomor_surat}}</span>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <span className="form-label m-0">Nama Pencipta</span>
                                                        </div>
                                                        <span className="form-label m-0 col-md-1">:</span>
                                                        <span className="form-label m-0 col-md-8">{{$archive->nama_pencipta}}</span>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <span className="form-label m-0">Petugas Registrasi</span>
                                                        </div>
                                                        <span className="form-label m-0 col-md-1">:</span>
                                                        <span className="form-label m-0 col-md-8">{{$archive->petugas_registrasi}}</span>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <span className="form-label m-0">Kode Klarisikasi</span>
                                                        </div>
                                                        <span className="form-label m-0 col-md-1">:</span>
                                                        <span className="form-label m-0 col-md-8">{{$archive->kode_klasifikasi}}</span>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-3 d-flex align-items-center">
                                                            <span className="form-label m-0">Jumlah Arsip</span>
                                                        </div>
                                                        <span className="form-label m-0 col-md-1">:</span>
                                                        <span className="form-label m-0 col-md-8">{{$archive->jumlah_arsip}}</span>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <span>Total Data {{$data->jumlah}}</span>
                            <nav className="float-end">
                                <ul className="pagination justify-content-end my-2">
                                    <li className="page-item {{($data->page == 1) ? 'disabled' : ''}}">
                                        @if($data->search == "")
                                        <a className="page-link" href="/all_archive/{{$data->page-1}}" tabindex="-1" aria-disabled="true">Previous</a>
                                        @else
                                        <a className="page-link" href="/archive/{{$data->search}}/{{$data->page-1}}" tabindex="-1" aria-disabled="true">Previous</a>
                                        @endif
                                    </li>
                                    <li className="page-item {{($data->page == 1) ? 'd-none' : ''}}">
                                        @if($data->search == "")
                                        <a className="page-link" href="/all_archive/{{$data->page-1}}">{{$data->page-1}}</a>
                                        @else
                                        <a className="page-link" href="/archive/{{$data->search}}/{{$data->page-1}}">{{$data->page-1}}</a>
                                        @endif
                                    </li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="#">{{$data->page}}</a>
                                    </li>
                                    <li className="page-item">
                                        @if($data->search == "")
                                        <a className="page-link" href="/all_archive/{{$data->page+1}}">{{$data->page+1}}</a>
                                        @else
                                        <a className="page-link" href="/archive/{{$data->search}}/{{$data->page+1}}">{{$data->page+1}}</a>
                                        @endif
                                    </li>
                                    <li className="page-item">
                                        @if($data->search == "")
                                        <a className="page-link" href="/all_archive/{{$data->page+1}}" tabindex="-1" aria-disabled="true">Next</a>
                                        @else
                                        <a className="page-link" href="/archive/{{$data->search}}/{{$data->page+1}}">Next</a>
                                        @endif
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    @include('client.layout.footer_arsip')
    <script src="/js/app.js"></script>
</body>

</html>